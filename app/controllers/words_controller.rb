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
        filtered_words = me.words[0]
        render json: filtered_words, status: :ok
    end


    def update
        word = Word.find_by!(id: params[:id])
        params["letters"].each do |letter| 
        letter2 = Letter.find_by!(id: letter["id"])
        letter2.update(letter2: letter["letter"])
    end
        word.task_update
        render json: word
    end

private 
  def letter_params
    params.permit(:letter2)
  end 



end
