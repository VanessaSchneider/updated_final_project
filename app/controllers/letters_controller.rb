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


    def update
        letter = Letter.find_by!(id: params[:id])
          letter.update(letter_params)
          if letter.valid?
          render json: letter, status: :ok
          else 
          render json: { errors: letter.errors.full_messages }, status: :unprocessable_entity
          end
        end

private 
def letter_params
    params.permit(:letter2)
end 


end

