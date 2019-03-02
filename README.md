# Project Name

> Agent Component
 - https://github.com/xillow-talk/steve-component-agent-contact

## Related Projects

  - https://github.com/xillow-talk/john-sprague-component-home-value
  - https://github.com/xillow-talk/leighton-component-photo-carousel

## Usage

> INSTRUCTIONS TO RUN

1) 'npm install' on root dirctory of this repo
2) 'npm run dev-pack' to bundle all assets to serve on html
3) update user info (line 7 and 8) on fakeData.js to your personal mysql account
3.5) log into your mysql (mysql -u root -p), and create the database 'agents'
4) 'npm run faker' to seed fake data into mysql
5) 'npm run start' to start server
6) localhost:6969 is server to copy into browser

# Data Generation
run `node data/csvSeed.js` from root directory

# CRUD Operations

GET '/houseId/listedAgent/:houseId'
  - required params:
    - path:
      - houseId

POST '/houses/:houseId/listedAgent'
  - required params:
    - path:
      - houseId
    - query:
      - name
      - company
      - reviews
      - recentSales
      - phone
      - url

PATCH '/houses/:houseId/listedAgent'
  - required params:
    - path:
      - houseId
    - query:
      - name
      - company
      - reviews
      - recentSales
      - phone
      - url

DELETE '/houses/:houseId/listedAgent'
  - required params:
    - path:
      - houseId
