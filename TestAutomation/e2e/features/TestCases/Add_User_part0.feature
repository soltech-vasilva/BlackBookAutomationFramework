###################################
# ADD USER PROFILE Test cases     #
###################################

Feature:  "Add a new User Profile"

  Rules: Add a new user with Administrators Role.

  Question:
  -Verify 1-7 user can be created. [TestCases_A-1]

  Background:

    Given I enter BlackBook Login Website
    And I wait
         #BUG ADDED THIS TO CONTINUE
         ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
    And I reload page "https://qa-autobahn.blackbookcloud.com/login"
    And I wait
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button
    And I wait
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on New User Button in User List
    And I wait

#####################################################################################################################
#                                             Test cases A-1                                                          #
#####################################################################################################################

  @TestCases_A-1
  Scenario Outline: "TestCases_A-1" Add 1-7 User and enter good data for User Profile. "No Error" display
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
    And I click checkbox User's Roles "Administrators"
      Then I should not see in "userrole" errors displayed
    And I click on Save button in Edit User Profile
    And I wait
      Then I should see "User Creation Successful" displayed on "UserList" popup
    And I wait


    Examples:
      | firstName     | lastName     | emailAddress                |phoneNumber    | newPassWord | confirmNewPassWord |
#Valid 1-7 Users input
      |   firstName1  | lastName1    | admintestemail1@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName2  | lastName2    | admintestemail2@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName3  | lastName3    | admintestemail3@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName4  | lastName4    | admintestemail4@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName5  | lastName5    | admintestemail5@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName6  | lastName6    | admintestemail6@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName7  | lastName7    | admintestemail7@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |