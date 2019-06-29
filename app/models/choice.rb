class Choice < ApplicationRecord
  belongs_to :question, required: true
  has_many :submission_choices 
end
