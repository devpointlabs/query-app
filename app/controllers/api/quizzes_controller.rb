class Api::QuizzesController < ApplicationController
  before_action :set_question
  before_action :set_submission
  before_action :set_quiz, only: [:show, :update, :destroy]
  
  def index
    render json: @question.submission.quizzes
  end

  def show
    render json: @question.submission.quizzes(params[:id])
  end

  def create
    quiz = @question.submission.quizzes.new(quiz_params)
    if quiz.save
      render json: quiz
    else 
      render json: item.errors, status: 422
    end 
  end

  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else 
      render json: item.errors, status: 422
    end 
  end

  def destroy
    @quiz.destroy
  end

  private
  def set_quiz
    @quiz = Quiz.find(params[:id])
  end 
  def set_submission
    @submission = Submission.find(params[:submission_id])
  end 
  def set_question
    @question = Question.find(params[:question_id])
  end 
  def quiz_params
    params.require(:quiz).permit(:name, :created_at, :updated_at)
  end 
end
