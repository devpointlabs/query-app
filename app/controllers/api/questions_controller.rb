class Api::QuestionsController < ApplicationController

  before_action :set_quiz
  before_action :set_question, only: [:show, :update, :destroy]
  def index
    questions = @quiz.questions.all
    render json: questions
  end

  def show
    render json: @question
  end

  def create
     question = @quiz.questions.new(question_params)
     if question.save

      render json: question
     else

      render json: question.errors, status: 422
     end
  end

  def update

    if question.update(question_params) #this could be wrong
      render json: question
    else
    render json: question.errors, status: 422
    end
  end

  def destroy
    @question.destroy
    render json: @question
  end

  private
  def set_question
    @question = @quiz.questions.find(params[:id])
  end

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end

  def question_params
    params.require(:question).permit(:name, :answerA, :answerB, :answerC, :answerD,  :correct_answer, :wrong_answers, :question_type, :quiz_id )
  end
end
