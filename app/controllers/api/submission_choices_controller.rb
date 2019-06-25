class Api::SubmissionChoicesController < ApplicationController
  before_action :set_submission
  before_action :set_choice
  before_action :set_submission_choice, only: [:index]

  def index
    render json: @submission.choice.submission_choices  
  end

  private 

  def set_submission_choice
    @submission_choice = Submission_choice.find(params[:id])
  end

  def set_submission
    @submission = Submission.find(params[:submission_id])
  end

  def set_choice
    @choice = Choice.find(params[:choice_id])
  end

end
