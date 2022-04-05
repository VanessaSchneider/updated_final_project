class LettersController < ApplicationController
    def index
        letters = Letter.all
        render json: letters, status: :ok
    end

    def show
        letter = Letter.find(params[:id])
        render json: letter, status: :ok
    end


end
