Feature:  "Verify that this bugs dont return to the application."

  Rules: Verify "User List" opens

  Question:


  Background:

    Given I enter BlackBook Login Website
    #Added this to continue test if previous did not end
    And  I reload "LogIn" page
    And I enter my user email address user1@example.com in Login
    And I enter my Password Password1 in Login
    And I click Login Button

######################################################################################################################
#                                             Test cases A                                                           #
#######################################################################################################################
#  @TestCases_A-44
#  Scenario: "@TestCases_A-44" (BB-517) Able to CREATE Empty string (SPACE BAR) for Segment Name
#   #(BB-580) Require
#    And I click on Segment Tab
#    And I click on Add submenu from Segment Tab
#      Then I should see "SegmentName" message "Required" displayed for this "empty" field
#      Then I should see in "Save" button "disable" in Edit Segment
#      Then I should see in "AddQuery" button "disable" in Edit Query Segment
#    And I enter Segment Name "SegmentName"
#    And I click on Save button in Edit Segment
#      Then I should see in "AddQuery" button "enable" in Edit Query Segment
#    And I click Add Query Button in Edit Segment
#      Then I should see "QueryName" message "Required" displayed for this "empty" field
#      Then I should see "QueryFilter" message "Required" displayed for this "empty" field
#    And I enter Query Name "QueryName"
#    And I click Circle icon in Filter grid to 2 "Make" in Edit Query
#    And I click checkbox Make "Acura" in Edit Query
#    And I click on More submenu from Make in Edit Query
#      Then I should see Add More Filters "Acura" checkbox "checked" in Role Editor
#    And I click Cancel Button from Add More Filters menu
#    And I click on Add/Save Query button in Edit Query
#    And I click on Segment Tab
#    And I click on Open submenu from Segment Tab
#    And I click on Gear Icon 1 "SegmentName" in Open Segment
#    And I click Edit in submenu from Gear Icon
#    And I click Edit Button in Edit Segments
#    And I clear text box selected "SegmentName" in Segment Editor
#      Then I should see "SegmentName" message "Required" displayed for this "filled" field
#      Then I should see in "Save" button "disable" in Edit Segment
#    And I enter Segment Name "  "
#      Then I should see "SegmentName" message "This is not a valid segment title" displayed for this "empty" field
#
#  @TestCases_A-45
#  Scenario: "@TestCases_A-45"  (BB-599) (Add Query): Adding Acura is not selected in "More" menu.
#    And I click on Segment Tab
#    And I click on Open submenu from Segment Tab
#    And I click on Gear Icon 1 "SegmentName" in Open Segment
#    And I click Edit in submenu from Gear Icon
#    And I click + icon for Queries in Edit Segments
#    And I click Edit Button for Queries in Edit Segment
#    And I click Circle icon in Filter grid to 1 "Make" in Edit Query
#    And I click on More submenu from Make in Edit Query
#      Then I should see Add More Filters "Acura" checkbox "checked" in Role Editor
#    And I click Cancel Button from Add More Filters menu
#    And I click on Add/Save Query button in Edit Query

#  @TestCases_A-46
#  Scenario: "@TestCases_A-46" (BB-513) (Segment- Edit): Adding User for "Share Users" clears user in list.
#    And I click on Segment Tab
#    And I click on Open submenu from Segment Tab
#    And I click on Gear Icon 1 "SegmentName" in Open Segment
#    And I click Edit in submenu from Gear Icon
#    And I click Edit Button in Edit Segments
#    And I click Shared Users Button in Edit Segments
#    And I enter Filter Edit Shared Users User2 in Edit Segment
#    #change location name and use same sentence  "in Edit Segment"
#    And I click checkbox on first user found from Filter Users in Role Editor
#      Then I should see Filter Edit Shared Users "User2" checkbox "checked" in Edit Segments
#    And I click Add Button for Edit Shared User popup in Edit Segments
#    And I click Shared Users Button in Edit Segments
#    And I enter Filter Edit Shared Users User2 in Edit Segment
#      Then I should see Filter Edit Shared Users "User2" checkbox "checked" in Edit Segments
#    And I click Cancel Button for Edit Shared User popup in Edit Segments
#    And I click on Save button in Edit Segment
#    And I click on Segment Tab
#    And I click on Open submenu from Segment Tab
#    And I click on Gear Icon 1 "SegmentName" in Open Segment
#    And I click Edit in submenu from Gear Icon
#    And I click Edit Button in Edit Segments
#    And I click Shared Users Button in Edit Segments
#    And I enter Filter Edit Shared Users User2 in Edit Segment
#      Then I should see Filter Edit Shared Users "User2" checkbox "checked" in Edit Segments
#
#  @TestCases_A-47
#  Scenario: "@TestCases_A-47" (BB-514) (Segment- Edit): Shared Users button disappears when pressing "Reset" button.
#    And I click on Segment Tab
#    And I click on Open submenu from Segment Tab
#    And I click on Gear Icon 1 "SegmentName" in Open Segment
#    And I click Edit in submenu from Gear Icon
#    And I click Edit Button in Edit Segments
#    And I click on Reset button in Edit Segment
#      Then I should see in "SharedUsers" button "enable" in Edit Segments

     #TODO aqui
  @TestCases_A-48
  Scenario: "@TestCases_A-48" (BB-514) (Segment- Edit): Shared Users button disappears when pressing "Reset" button.
    And I click on Segment Tab
    And I click on Open submenu from Segment Tab
    And I click on Gear Icon 1 "SegmentName" in Open Segment
    And I click Edit in submenu from Gear Icon
      Then I store value Count "SharedUsers" displayed in Edit Segments
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users User3 in Edit Segment
    #change location name and use same sentence  "in Edit Segment"
    And I click checkbox on first user found from Filter Users in Role Editor
      Then I should see in "SharedUsers" button "enable" in Edit Segments
   And I click Add Button for Edit Shared User popup in Edit Segments
      Then I should see Count has increase value for "SharedUsers" in Edit Segments
    And I click on Save button in Edit Segment
    #dont Take out wait
    And I wait
    And I click Edit Button in Edit Segments
    And I click Shared Users Button in Edit Segments
    And I enter Filter Edit Shared Users All in Edit Segment
    #change location name and use same sentence  "in Edit Segment"
    And I click checkbox on first user found from Filter Users in Role Editor
    And I clear text box selected "SearchUsers" in Segment Editor
    And I click Add Button for Edit Shared User popup in Edit Segments
    And I click on Save button in Edit Segment