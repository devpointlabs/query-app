class Api::QuestionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_quiz
  before_action :set_question, only: [:show, :update, :destroy]
  def index
    @questions = @quiz.questions.all
    render json: @questions
  end

  def show
    
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
    question = @quiz.questions.update(question_params) #this could be wrong
    question.update(question_params)
    render json: question

  end

  def destroy
    Question.destroy
    render json: {message: "Question Deleted"}
  end

  private 

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end
  
  def set_question
    @question = @quiz.questions.find(params[:id])
  end

 

  def question_params
    params.require(:question).permit(:name)
  end
end
