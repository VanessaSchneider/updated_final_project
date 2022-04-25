class TriviaController < ApplicationController
    def index
        trivia = Trivium.all
        render json: trivia, status: :ok
    end

    def show
        trivium = Trivium.find(params[:id])
        render json: trivium, status: :ok
    end

    def get_trivia
        trivia = Trivium.all
        me = User.find_by(id:session[:user_id])
        filtered_trivia = me.trivia
        render json: filtered_trivia, status: :ok
    end



    def update
        trivium = Trivium.find_by!(id: params[:id])
          trivium.update(trivia_params)
          if trivium.valid?
            trivium.task_update
          render json: trivium, status: :ok
          else 
          render json: { errors: trivium.errors.full_messages }, status: :unprocessable_entity
          end
        end


        private 
  def trivia_params
    params.permit(:guessed)
  

  end
        



end
