class RiddlesController < ApplicationController

    def index
        riddles= Riddle.all
        render json: riddles, status: :ok
    end

    def show
        riddle = Riddle.find(params[:id])
        render json: riddle, status: :ok
    end

    def update
        riddle = Riddle.find_by!(id: params[:id])
          riddle.update(riddle_params)
          if riddle.valid?
            riddle.set_task
          render json: riddle, status: :ok
          else 
          render json: { errors: riddle.errors.full_messages }, status: :unprocessable_entity
          end
        end

private 
def riddle_params
    params.permit(:correct)
  

end



end
