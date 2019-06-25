class Api::SubmissionChoicesController < ApplicationController
  before_action :set_submission
  before_action :set_submission_choice

  def index
    render json: @submission.submissions_choices
  end
  
  def sho
    render json: @submission.submission_choices
    
  end

  private 
  def set_submission_choice
    @submission_choice = Submission_choice.find(params[:id])
  end 
  def set_submission
    @submission = Submission.find(params[:submission_id])
  end 
  


end


