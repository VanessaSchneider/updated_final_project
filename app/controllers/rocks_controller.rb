class RocksController < ApplicationController
    def index
        rocks = Rock.all
        render json: rocks, status: :ok
    end

    def show
        rock = Rock.find(params[:id])
        render json: rock, status: :ok
    end

    def get_rocks
        rocks = Rock.all
        me = User.find_by(id:session[:user_id])
        filtered_rocks = me.rocks
        render json: filtered_rocks, status: :ok
    end



    def update
        rock = Rock.find_by!(id: params[:id])
          rock.update(rock_params)
          if rock.valid?
          render json: rock, status: :ok
          else 
          render json: { errors: rock.errors.full_messages }, status: :unprocessable_entity
          end
        end


        private 
def rock_params
    params.permit(:win)
  

end
        



end



