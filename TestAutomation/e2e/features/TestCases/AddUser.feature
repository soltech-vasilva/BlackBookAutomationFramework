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
      And I enter my user email address user3@example.com
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

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################
  @TestCases_A
  Scenario Outline: "@TestCases_A" Enter good Add User Profile page. "No Error" display
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
    When I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName     | emailAddress              |phoneNumber    | newPassWord | confirmNewPassWord |
#phone number inputs
            #valid phone number with parenthesis and dashes
      |   AfirstName  | AlastName    | AemailAddress@email.com   |(123)456-7890  | QaAdmin123  |   QaAdmin123       |
            #valid phone number with dashes
      |   AfirstName  | AlastName    | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
            #valid phone number with no dashes
      |   AfirstName  | AlastName    | AemailAddress@email.com   | 1234567890    | QaAdmin123  |   QaAdmin123       |
            #valid phone number with parenthesis
      |   AfirstName  | AlastName    | AemailAddress@email.com   | (123)4567890  | QaAdmin123  |   QaAdmin123       |

#first name and last name inputs
            #valid first name and last name
      |   Afirstname   | Alastname    | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123      |
            #valid first name and last name with number
      |   Afirstname1  | Alastname1   | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123      |
            #valid first name and last name with number and symbols
      |   Afirstname1@ | Alastname1@  | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123      |
            #valid first name and last name are the same name
      |   Afirstname1@ | Afirstname1@ | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123      |

#email inputs
            #valid email with numbers
      |   Afirstname   | Alastname    | AemailAddress1@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123     |
            #valid email with symbols !
      |   Afirstname   | Alastname    | AemailAddress!@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123     |
            #valid email with symbols _
      |   Afirstname   | Alastname    | AemailAddress_@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123     |
            #valid email with symbols . in between letters
      |   Afirstname   | Alastname    | Aemail.Address@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123     |
            #valid email with less on @ and .
      |   Afirstname   | Alastname    | AemailAddress1@a.c         | 123-456-7890  | QaAdmin123  |   QaAdmin123     |
        #valid email Uppercase on Email provider .
      |   Afirstname   | Alastname    | AemailAddress1@Email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123     |
          #valid email Uppercase on .Com
      |   Afirstname   | Alastname    | AemailAddress1@Email.Com   | 123-456-7890  | QaAdmin123  |   QaAdmin123     |

#New Password and Confirm New Password inputs
            #valid Password with letters and number
      |     AfirstName | AlastName    | AemailAddress@email.com    | (123)456-7890 | Qaadmin1    |   Qaadmin1       |
            #valid Password with letters and number order
      |     AfirstName | AlastName    | AemailAddress@email.com    | (123)456-7890 | 1Qaadmin    |   1Qaadmin       |
            #valid Password with letters , number order and symbols
      |     AfirstName | AlastName    | AemailAddress@email.com    | (123)456-7890 | @1Qaadmin   |   @1Qaadmin      |
            #valid Password with letters , number order and symbols
      |     AfirstName | AlastName    | AemailAddress@email.com    | (123)456-7890 | @1Q.aadmin  |   @1Q.aadmin     |
             #valid Password with letters and number long password
      |     AfirstName | AlastName    | AemailAddress@email.com    | (123)456-7890 | Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1  |   Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1 |
            #valid Password with few letters and numbers
      |     AfirstName | AlastName    | AemailAddress@email.com    | (123)456-7890 | 123456Aa    |   123456Aa       |

#######################################################################################################################
#                                             Test cases B                                                            #
#######################################################################################################################
  @TestCases_B-1
  Scenario Outline: "@TestCases_B-1" Enter wrong User Profile Email address will throw error "Invalid email address"
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
      But I enter "a wrong Email Address"
      Then I should see "emailAddress" errors "Invalid email address" displayed for this "filled" field
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
    When I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber   |newPassWord  | confirmNewPassWord |
#invalid email with symbols . end of letters
      |   Afirstname    | Alastname    | AemailAddress.@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with symbols @ end of letters
      |    AfirstName   | AlastName    | AemailAddress@@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with just A
      |     AfirstName  | AlastName    | A                          | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with no hosting name after "@"
      |     AfirstName  | AlastName    | A@.c                       | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with nothing after "."
      |     AfirstName  | AlastName    | A@.                        | 123-456-7890  | QaAdmin123  |   QaAdmin123       |

  @TestCases_B-2
  Scenario Outline: "@TestCases_B-2" Enter wrong User Profile phone number will throw error "Must be a valid 10 digit number"
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
      But I enter "a wrong phone number"
      Then I should see "phoneNumber" errors "Must be a valid 10 digit number" displayed for this "filled" field
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
    When I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      |   firstName       | lastName     | emailAddress               | phoneNumber   |newPassWord  | confirmNewPassWord |
##invalid phone number with  A letter
      |     AfirstName    | AlastName    | AemailAddress@email.com    |  a            | QaAdmin123  |   QaAdmin123       |
#invalid phone number with  A letter and numbers
      |     AfirstName    | AlastName    | AemailAddress@email.com    | a23-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid phone number with no area code
      |     AfirstName    | AlastName    | AemailAddress@email.com    | 456-7890      | QaAdmin123  |   QaAdmin123       |
#invalid phone number with white spaces
      |     AfirstName    | AlastName    | AemailAddress@email.com    |  " "-" "-7890 | QaAdmin123  |   QaAdmin123       |

  @TestCases_B-3
  Scenario Outline: "@TestCases_B-3" Enter wrong User Profile New Password and Confirm New Password will throw error "Password must be at least 8 characters, contain a number, and mixed case letters." and "Passwords do not match"
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
      But I enter "a wrong New Password with no number"
      Then I should see "newPassWord" errors "Password must be at least 8 characters, contain a number, and mixed case letters." displayed for this "filled" field
    When I enter my confirm new password <confirmNewPassWord>
      But I enter "a different Confirm New Password from New Password"
      Then I should see "confirmNewPassWord" errors "Passwords do not match" displayed for this "filled" field
    When I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber      |newPassWord    | confirmNewPassWord   |
  ##invalid Password with  no number
      |      ""         | "            | "     "ilAddress@email.com | 123-456-7890     | "       "Qa   |   "       "Qa1       |
  #invalid Password with   no lower case
      |     ""          | "            | "     "ilAddress@email.com | 123-456-7890     | "       "Q1   |   "       "a1        |
  #invalid Password with   no number ,lower case, and upper case
      |      ""         | "            | "     "ilAddress@email.com | 123-456-7890     | "       "     |   "       "1         |

  @TestCases_B-4
  Scenario Outline: "@TestCases_B-4" Enter wrong User Profile "New Password" will throw error  "Password must be at least 8 characters, contain a number, and mixed case letters." but Confirm Password is the same "NO ERROR"
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
      But I enter "a wrong New Password with no numbers"
      Then I should see "newPassWord" errors "Password must be at least 8 characters, contain a number, and mixed case letters." displayed for this "filled" field
    When I enter my confirm new password <confirmNewPassWord>
      But I enter "same New Password into Confirm New Password"
      Then I should not see in "confirmNewPassWord" errors displayed
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber      |newPassWord    | confirmNewPassWord   |
    #invalid Password with no number and confirmation password is the same
      |      ""         | "            | "     "ilAddress@email.com | 123-456-7890     | "       "Qa   |   "       "Qa        |


#######################################################################################################################
##                        COMMENT OUT FOR NOW  Test cases C     (Same controller show require and pass not match      #
#######################################################################################################################
#  @TestCases_C-1
#  Scenario Outline: "@TestCases_C-1" Enter empty User Profile data will throw error "Required" for all fields
#    When I enter my first name <firstName>
#      But I enter "nothing to first name"
#      Then I should see "firstName" errors "Required" displayed for this "empty" field
#    And I enter my last name <lastName>
#      But I enter "nothing to last name"
#      Then I should see "lastName" errors "Required" displayed for this "empty" field
#    And I enter my email address <emailAddress>
#      But I enter "nothing to email address"
#      Then I should see "emailAddress" errors "Required" displayed for this "empty" field
#    And I enter my phone number <phoneNumber>
#    And I enter my new Password <newPassWord>
#      But I enter "nothing to New Password"
#      Then I should see "newPassWord" errors "Required" displayed for this "empty" field
#    And I enter my confirm new password <confirmNewPassWord>
#      But I enter "nothing to Confirm New Password"
#      Then I should see "confirmNewPassWord" errors "Required" displayed for this "empty" field
#    And I click Cancel Button
#    And I click Profile Button
#    And I click Logout sub menu
#
#    Examples:
#      | firstName     | lastName  | emailAddress              | phoneNumber   | newPassWord    | confirmNewPassWord   |
# #All Empty Fields
#      |               |           |                           |               |                |                      |


  @TestCases_C-2
  Scenario Outline: "@TestCases_C-2" Enter empty firstName  will throw error "Required"
    When I enter my first name <firstName>
      But I enter "nothing to first name"
      Then I should see "firstName" errors "Required" displayed for this "empty" field
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord    | confirmNewPassWord   |
#First Name is Empty Field
      |               | AlastName | AemailAddress@email.com   | (123)456-7890 | QaAdmin123    |   QaAdmin123         |

  @TestCases_C-3
  Scenario Outline: "@TestCases_C-3" Enter empty lastName  will throw error "Required"
    When I click Reset Button
    And I enter my first name <firstName>
    And I enter my last name <lastName>
      But I enter "nothing to last name"
      Then I should see "lastName" errors "Required" displayed for this "empty" field
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord    | confirmNewPassWord   |
##Last Name is Empty Field
      |    AfirstName |           | AemailAddress@email.com   | (123)456-7890 | QaAdmin123    |   QaAdmin123         |

  @TestCases_C-4
  Scenario Outline: "@TestCases_C-4" Enter empty emailAddress  will throw error "Required"
    When I click Reset Button
    And I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
      But I enter "nothing to email address"
      Then I should see "emailAddress" errors "Required" displayed for this "empty" field
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord    | confirmNewPassWord   |
#Email is Empty Field
      |    AfirstName | AlastName |                           | (123)456-7890 | QaAdmin123    |   QaAdmin123         |

  @TestCases_C-5
  Scenario Outline: "@TestCases_C-5" Enter empty New Password  will throw error "Required"
    When I click Reset Button
    And I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
      But I enter "nothing to New Password"
      Then I should see "newPassWord" errors "Required" displayed for this "empty" field
    And I enter my confirm new password <confirmNewPassWord>
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord    | confirmNewPassWord   |
#Email is Empty Field
      |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 |               |   QaAdmin123         |

  @TestCases_C-6
  Scenario Outline: "@TestCases_C-6" Enter empty Confirm New Password  will throw error "Required" and "Passwords do not match"
    When I click Reset Button
    And I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
      But I enter "nothing to Confirm New Password"
      Then I should see "confirmNewPassWord" errors "Required" displayed for this "empty" field
      Then I should see "confirmNewPassWord" errors "Passwords do not match" displayed for this "empty" field
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord    | confirmNewPassWord   |
#Email is Empty Field
      |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 |  QaAdmin123   |                      |

  @TestCases_C-7
  Scenario Outline: "@TestCases_C-7" Enter empty Strings (SPACE BAR) User Profile data will throw error "Spaces are invalid characters"
    When I click Reset Button
    And I enter my first name <firstName>
      But I enter "(SPACE BAR) for empty strings on firstName"
      Then I should see "firstName" errors "Spaces are invalid characters" displayed for this "filled" field
    And I enter my last name <lastName>
      But I enter "(SPACE BAR) for empty strings on lastName"
      Then I should see "lastName" errors "Spaces are invalid characters" displayed for this "filled" field
    And I enter my email address <emailAddress>
      But I enter "(SPACE BAR) for empty strings on emailAddress"
      Then I should see "emailAddress" errors "Spaces are invalid characters" displayed for this "filled" field
    And I enter my phone number <phoneNumber>
      Then  I should not see in "phoneNumber" errors displayed
    And I enter my new Password <newPassWord>
      Then  I should not see in "newPassWord" errors displayed
    And I enter my confirm new password <confirmNewPassWord>
      Then  I should not see in "confirmNewPassWord" errors displayed
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord             | confirmNewPassWord   |
#NewPassword is Empty Field
      |    "       "  | "       " | s"  "s@hot.com            | "           " |   "      "Qa1          |    "      "Qa1       |
