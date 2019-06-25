require 'test_helper'

class Api::QuestionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_questions_index_url
    assert_response :success
  end

  test "should get create" do
    get api_questions_create_url
    assert_response :success
  end

  test "should get update" do
    get api_questions_update_url
    assert_response :success
  end

  test "should get new" do
    get api_questions_new_url
    assert_response :success
  end

end
