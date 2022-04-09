class WordsController < ApplicationController


    def index
        words = Word.all
        render json: words, status: :ok
    end

    def show
        word = Word.find(params[:id])
        render json: word, status: :ok
    end

    def get_words
        words = Word.all
        me = User.find_by(id:session[:user_id])
        filtered_words = me.words
        render json: filtered_words, status: :ok
    end




end
