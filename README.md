# YOUR PROJECT TITLE
#### Video Demo:  <URL HERE>
#### Description:
TODO

## Features



----------------------------------------------------------------------

## Tasks
[x] chinese names.
[x] group the siblings under thier parents.
[x] sort siblings and children by age in profiles.html.
[x] group the children by spouses (aka partners).
[x] generate google maps address URLs.
[x] code the display pics.
[x] fix bug where i can't load Hung's page.
[x] create clickable links from the directory page to the profile page.
[x] turn all names within profiles.html into links.
[x] create id nunbers.
[x] fix bug where spouses by marriage don't populate the parnters/chitlins.
[x] fix bug where empty birthdays (Imad, Greg, etc.) don't show up in the directory listing.
[x] spend all day re-working lineage.
[x] bug: first_EN search queries don't do well with spaces.
[x] make generation number algorithm function.
[x] make age order function.
[x] import addresses into databases.
[x] fix bug where the married in-laws crash the page due to gen_delta().
[x] age at death.
[x] VCARD generator.
[x] create search bar (filter).
[x] turn sibling lookup into a function.
[x] turn CN lookup into a function.
[x] add AGE to the profiles page at the top.
[x] need 2-digit numbers in DOBs in directory.
[x] create birthdate function.
[x] sort by DOB (need to format into dates; write a function for this).
[x] turn age calculator into a function.
[x] display year with decimals for age. proper date subtraction.
[x] implement hideable columns.
[x] fix empty birthdays showing up as zeros.
[x] for directory.html, calculate ages using python instead of SQL.
[x] create birthday function.
[x] implement sorting.
[x] star sign.
[x] zodiac.
[x] freeze the top row of the directory table.
[x] populate display photos.
[x] implement containers for style formatting.
[x] populate more columns of directory.
[x] Convert VCARD to QR code.
[x] make mobile friendly.
[x] modify the sexagenic lookup tables.
[x] turn grandparents' ages into decimals.
[ ] make the lookup based on id.
[ ] make relationship diagram algorithm.
[ ] make first column sticky.
[ ] write query that generates a comprehensive table that lists all of each person's root ancestors.
[ ] make a button that toggles multiple checkboxes for desktop vs mobile-friendly verison (show only: first name, age, socials).


[ ] create card view.
[ ] change from looking up by first name to looking up by id number.
[ ] calculate lunar birthday.
[ ] text to speech. [A hacky way to display audio translations from Google Translate](https://markoskon.com/display-translation-audio/)
[ ] need Lee birth date.
[ ] need Lena birth date.
[ ] calculate consanguinity/affinity degrees-of-relationships between two people (coefficient of relatedness)
    keywords: child, parent, spouse, sibling
    (brother's sister's wife's father) (versus father of wife of sister of brother)
    details that matter for chinese consanguinity: older/younger, male/female, age of subject person vs age of object person.
[ ] implement all 10 bloodlines.
[ ] add footer.
[ ] collect anniversary dates.
[ ] collect birthplace.
[ ] collect divorce dates.
[ ] add DOD.

[ ] button text is not selectable.
[ ] implement cal theta tau style sheet.
[ ] turn checkboxes into depressed or released buttons.
[ ] download backup of code.
[ ] add an x to clear the search bar entry.
[ ] count results of search filter (X out of Y entries).
[ ] add generation number to directory table.
[ ] turn profiles consanguinities into actual tables.
[ ] age order (by DOB) function needs to take into account half-siblings (e.g. 5th kid of virginia, but 2nd kid of their father)
[ ] combine the two partner lookup functions (agnostic versus if statement, see screenshot).
[ ] link empty addresses to their household partners' or parents' address.
[ ] anything that is unfound should not have post button links.
[ ] add "last confirmed on [date]" note to addresses.
[ ] pets.
[ ] implement multiple emails & phone numbers.
[ ] categorize the spouses by relation/kinship: insider (consanguine) or in-laws (affinity).
[ ] reformat marriage and divorce lists.
[ ] add last names.


----------------------------------------------------------------------
## Files

* index.html
* registration page
* personal dashboard, personal profile, editing page.
* profile page
* CSS file
* family tree diagram
* db file
* flask file


----------------------------------------------------------------------

## Notes

### Concepts
* javascript tree diagram
* JSON
* cards
* nodes
* genealogy, collapsible tree, mind map, interactive, tidy tree, cluster tree, cluster dendrograms, reingold-tilford "tidy" algorithm, tree layout,
node-link diagram, root, descendants, leaf nodes, org chart, flow chart,


### Family Tree & Directory

* search feature
* sort feature
* filter feature
    * name
    * generation number
* Views
    * pedigree view flow chart tree diagram
    * simple diagram (immediate family relationships)
    * third party js family tree library: e.g. OrgChart JS
* consanguinity calculator
    * chinese honorifics
    * e.g. brother of my sister of my mother of my son
* thumbnails
* zodiac
* star sign
* date of death
* pets
* profile cards
* photo
* registration page
* login page
* API with google maps
    * address
* vcard generator
    * QR code
    * full name
    * gender
    * birthday
    * death day
    * marriage anniversary
    * (see excel sheet)
* node diagram
* dashboard editing page
* display qty per page
* multiple pages


(https://www.edrawmax.com/article/chinese-family-tree.html)

### Resources
* D3.js
* SVG utility, SVG family trees
* BalkanGraph
* Graphviz
* dTree (Based on D3)
* (https://www.reddit.com/r/javascript/comments/1cnd08s/askjs_seeking_affordable_family_tree_javascript/)
* GoJS Genogram
* [https://dzone.com/articles/top-6-javascript-family-tree-diagram-libraries](https://dzone.com/articles/top-6-javascript-family-tree-diagram-libraries)
    * DHTMLX Diagram is a Javascript library [step-by-step guide](https://dhtmlx.com/blog/javascript-tree-diagram-with-dhtmlx/)
* (http://astuteo.com/slickmap/)
* [Building a tree diagram in D3.js](https://blog.pixelingene.com/2011/07/building-a-tree-diagram-in-d3-js)
* [ErikGartner/dTree](https://github.com/ErikGartner/dTree)
    * [dTree Demo](https://jsfiddle.net/rha8sg79/)
* (https://stackoverflow.com/questions/28166813/how-to-use-googles-text-to-speech-service-for-chinese-characters-on-android)
* (https://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-a-fixed-frozen-left-column-and-a-scrollable-b)
    * (https://codepen.io/swastikmishra/pen/zYYdKBQ)
----------------------------------------------------------------------
