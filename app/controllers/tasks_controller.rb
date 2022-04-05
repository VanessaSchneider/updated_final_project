class TasksController < ApplicationController

    def index
        tasks= Task.all
        render json: tasks, status: :ok
    end

    def show
        task = Task.find(params[:id])
        render json: task, status: :ok
    end




end
