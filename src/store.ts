import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import * as api from '@/tmdb-api/tmdb-api';
import { ExtendedMovieDetails, PagedResponse, ShortMovieDetails } from '@/tmdb-api/tmdb.models';

export default new Vuex.Store({
  state: {
    moviesPage: new PagedResponse<ShortMovieDetails[]>({results: []}),
    isLoading: true,
    searchQuery: '',
    currentView: 'popular'
  },
  getters: {
    movies: state =>  state.moviesPage.results.map(movie => new ShortMovieDetails(movie)),
    currentPage: state => state.moviesPage.page,
    totalPages: state => state.moviesPage.total_pages,
    isSearchDisabled: state => !state.searchQuery
  },
  mutations: {
    setMoviesPage(state, moviesPage) {
      state.moviesPage = moviesPage;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setSearchQuery(state, searchQuery) {
      searchQuery = searchQuery || '';
      state.searchQuery = searchQuery.trim();
    },
    setCurrentView(state, currentView) {
      state.currentView = currentView;
    }
  },
  actions: {
    async fetchPopular({ commit }, page = 1) {
      commit('setIsLoading', true);
      commit('setCurrentView', 'popular');

      const moviesPage = await api.fetchPopular(page);

      commit('setMoviesPage', moviesPage);
      commit('setIsLoading', false);

    },
    async searchMovies({ commit, state }, page = 1) {
      commit('setIsLoading', true);
      commit('setCurrentView', 'search');

      const moviesPage = await api.search(state.searchQuery, page);

      commit('setMoviesPage', moviesPage);
      commit('setIsLoading', false);
    },
    async updatePage({ dispatch, state }, page) {
      if (state.currentView === 'popular') {
        dispatch('fetchPopular', page)
      }

      if (state.currentView === 'search') {
        dispatch('searchMovies', page)
      }
    }
  },
  modules: {
    moviePage: {
      namespaced: true,
      state: {
        isLoading: true,
        movieDetails: null
      },
      getters: {
        movieDetails: state => new ExtendedMovieDetails(state.movieDetails)
      },
      mutations: {
        setMovieDetails(state, movieDetails) {
          state.movieDetails = movieDetails;
        },
        setIsLoading(state, isLoading) {
          state.isLoading = isLoading;
        }
      },
      actions: {
        async fetchMovie({ commit }, id) {
          commit('setIsLoading', true);

          commit('setMovieDetails', await api.fetchMovie(id));
          commit('setIsLoading', false);
        }
      }
    }
  }
})
