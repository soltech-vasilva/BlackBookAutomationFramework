###################################
# ADD USER PROFILE Test cases    #
###################################

Feature:  "Add a new User Profile"

  Rules: Add a new User

  Question:
  -Verify 26 user can be created. [TestCases_1]
  -Verify that All inputs boxes are working "No ERROR". [Test case A]
  -What happens if email entered is bad "Display ERROR"? Yes [Test case B-1]
  -What happens if phone number entered is bad "Display ERROR"? Yes [Test case B-2]
  -What Happens if Password does not meet requirements and Confirm Password is different "Display ERROR"?Yes ON BOTH  [Test case B-3]
  -What Happens if Password does not meet requirements and Password is same "Display ERROR"? Yes ON Password Only [Test case B-4]
  -What happens if fields are all empty on require fields "Display ERROR"? Yes [TestCases_C-1]
  -what happens if first name is empty on require fields "Display ERROR"? Yes [TestCases_C-2]
  -what happens if last name is empty on require fields "Display ERROR"? Yes [TestCases_C-3]
  -what happens if email address is empty on require fields "Display ERROR"? Yes [TestCases_C-4]
  -what happens if new Password is empty on require fields "Display ERROR"? Yes [TestCases_C-5]
  -what happens if Confirm new Password is empty on require fields "Display ERROR"? Yes [TestCases_C-6]
  -what happens if enter empty strings "white spaces" (SPACE BAR) "Display ERROR"? Yes [TestCases_C-7]

  -BUG: not loading the page correctly , I am adding reload page.

  Background:

    Given I enter BlackBook Login Website
         #BUG ADDED THIS TO CONTINUE
         ## bug that bypasses login happens only in desktop catches issues (it thinks is login) , browserstack works fine
    And I reload page "http://qa-autobahn.blackbookcloud.com/login"
    And I wait
      #And I check value on textbox
    And I enter my user email address user1@example.com
    And I enter my Password Password1
    And I click Login Button
    And I click on Admin Tab
    And I click on Users submenu from Admin Tab
    And I click on New User Button

#####################################################################################################################
#                                             Test cases 1                                                            #
#####################################################################################################################
  @TestCases_1
  Scenario Outline: "TestCases_1" Add 26 User and enter good for User Profile. "No Error" display
    When I enter my first name <firstName>
    Then I should not see in "firstName" errors displayed
    And I enter my last name <lastName>
    Then I should not see in "lastName" errors displayed
    And I enter my email address <emailAddress>
    Then I should not see in "emailAddress" errors displayed
    And I enter my phone number <phoneNumber>
    Then I should not see in "phoneNumber" errors displayed
    And I enter my new Password <newPassWord>
    Then I should not see in "newPassWord" errors displayed
    And I enter my confirm new password <confirmNewPassWord>
    Then I should not see in "confirmNewPassWord" errors displayed
    And I click on Save button


    Examples:
      | firstName     | lastName     | emailAddress                |phoneNumber    | newPassWord | confirmNewPassWord |
#Valid 26 Users input
      |   firstName1  | lastName1    | admintestemail1@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName2  | lastName2    | admintestemail2@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName3  | lastName3    | admintestemail3@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName4  | lastName4    | admintestemail4@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName5  | lastName5    | admintestemail5@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName6  | lastName6    | admintestemail6@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName7  | lastName7    | admintestemail7@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName8  | lastName8    | admintestemail8@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName9  | lastName9    | admintestemail9@yopmail.com  |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName10 | lastName10   | admintestemail10@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName11 | lastName11   | admintestemail11@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName12 | lastName12   | admintestemail12@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName13 | lastName13   | admintestemail13@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName14 | lastName14   | admintestemail14@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
      |   firstName15 | lastName15   | admintestemail15@yopmail.com |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
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

  @TestCases_A-4
  Scenario: "@TestCases_A-4" (BB-413) Click "Save" twice in Edit Role list will show error (weird state).DONT RUN DELETE USER
    And I click on Admin Tab
    And I wait
    And I click on Roles submenu from Admin Tab
    And I wait
    And I click on Gear Icon 1
    And I click Edit from Gear Icon
    And I wait
    And I click on Save button in Role Editor
    And I wait
    And I click X on Message Popup
    And I add Permission "Settings"
    And I click on Save button in Role Editor
    And I wait
    Then I should see "Role Update Successful" displayed on "EditRoles" popup
    And I wait
    And I click X on Message Popup
    And I wait
