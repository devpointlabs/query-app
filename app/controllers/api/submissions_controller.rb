class Api::SubmissionsController < ApplicationController

def create
    submission = Submission.new(submission_params)
    if submission.save
        render json: submission 
    else 
        render json: {errors: submission.errors}, status: 422
    end
    
end

private 
def submission_params
    params.require(:submission).permit(:user_id, :quiz_id)
end 

end
