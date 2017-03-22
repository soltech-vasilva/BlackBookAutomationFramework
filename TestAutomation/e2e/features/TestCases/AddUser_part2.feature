###################################
# ADD USER PROFILE Test cases     #
###################################

Feature:  "Add a new User Profile"

  Rules: Add a new user with Administrators Role.

  Question:
  -Verify 13-26 user can be created. [TestCases_A-1]

  Background:

    Given I enter BlackBook Login Website
    And I wait
        #BUG ADDED THIS TO CONTINUE
        ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
     #And I check value on textbox
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on New User Button in User List
    And I wait

#####################################################################################################################
#                                             Test cases A-1                                                        #
#####################################################################################################################
  @TestCases_A-1
  Scenario Outline: "TestCases_A-1" Add 13-26 User and enter good data for User Profile. "No Error" display
    When I enter my first name <firstName> in Form
      Then I should not see in "firstName" errors displayed
    And I enter my last name <lastName> in Form
      Then I should not see in "lastName" errors displayed
    And I enter my email address <emailAddress> in Form
      Then I should not see in "emailAddress" errors displayed
    And I enter my phone number <phoneNumber> in Form
      Then I should not see in "phoneNumber" errors displayed
    And I enter my new Password <newPassWord> in Form
      Then I should not see in "newPassWord" errors displayed
    And I enter my confirm new password <confirmNewPassWord> in Form
      Then I should not see in "confirmNewPassWord" errors displayed
    And I enter Filter Roles search "Administrators" in Edit User Profile
    And I click checkbox User's Roles "Administrators"
      Then I should not see in "userrole" errors displayed
    And I wait
    And I click on Save button in Edit User Profile
      Then I should see "User Creation Successful" displayed on "UserList" popup
    And I wait


    Examples:
      | firstName     | lastName     | emailAddress                |phoneNumber    | newPassWord | confirmNewPassWord |
#Valid 13-26 Users input
      |   firstName16 | lastName16   | admintestemail16@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName17 | lastName17   | admintestemail17@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName18 | lastName18   | admintestemail18@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName19 | lastName19   | admintestemail19@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName20 | lastName20   | admintestemail20@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName21 | lastName21   | admintestemail21@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName22 | lastName22   | admintestemail22@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName23 | lastName23   | admintestemail23@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName24 | lastName24   | admintestemail24@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName25 | lastName25   | admintestemail25@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName26 | lastName26   | admintestemail26@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |