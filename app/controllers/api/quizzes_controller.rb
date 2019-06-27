class Api::QuizzesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_quiz, only: [:show, :update, :create, :destroy]

  def index
    render json: Quiz.all
  end

  def show
    render json: @quiz
  end

  def create
    quiz = current_user.quizzes.new(quiz_params)

    if quiz.save
      render json: quiz
    else
      render json: { errors: quiz.errors }, status: 422
    end
  end

  def update
    quiz = Quiz.find(params[:id])
    if quiz.update
      render json: quiz
    else
      render json: { errors: quiz.errors }, status: 422
    end
  end

  def destroy
    #could break here
    @quiz.destroy
  end

  private
  def set_quiz
    #could break here
    @quiz = Quiz.find(params[:id])
  end

  def quiz_params
    params.require(:quiz).permit(:name)
  end

end
