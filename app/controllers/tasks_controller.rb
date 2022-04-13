class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: tasks, status: :ok
    end

    def show
        task = Task.find(params[:id])
        render json: task, status: :ok
    end


    def get_tasks
        tasks = Task.all
        me = User.find_by(id:session[:user_id])
        filtered_tasks = me.task
        render json: filtered_tasks, status: :ok
    end



    def update
        task = Task.find_by!(id: params[:id])
          task.update(task_params)
          if task.valid?
          render json: task, status: :ok
          else 
          render task: { errors: task.errors.full_messages }, status: :unprocessable_entity
          end
        end

        private

    def task_params
        params.permit(:task1)

   end



   



end
