class LettersController < ApplicationController

    def index
        letters = Letter.all
        render json: letters, status: :ok
    end

    def show
        letter = Letter.find(params[:id])
        render json: letter, status: :ok
    end


    def get_letters
        letters = Letter.all
        me = User.find_by(id:session[:user_id])
        filtered_letters = me.letters
        render json: filtered_letters, status: :ok
    end


end

