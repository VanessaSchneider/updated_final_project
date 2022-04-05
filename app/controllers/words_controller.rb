class WordsController < ApplicationController


    def index
        words = Word.all
        render json: words, status: :ok
    end

    def show
        word = Word.find(params[:id])
        render json: word, status: :ok
    end


end
