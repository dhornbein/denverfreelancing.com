"use strict"

var app = new Vue({
  delimiters: ["((", "))"],
  el: "#main",
  data: {
    // workbook information about the target spreadsheet
    workbook: {
      // spreadsheet ID
      id: "123dFQ4bZVXNtrmD23_xZCVNJd1_MAvdVY_yISiJcBYY",
      // The SheetID for the workbook's sheets
      // See http://damolab.blogspot.com/2011/03/od6-and-finding-other-worksheet-ids.html
      // This can be a string OR the numbered position of the tab on the
      // workbook starting with 1 as the left most tab... yeah it's crazy
      sheets: {
        websites: 'ozh0xpx',
        books: 'od6',
        tools: 'o3lgqx5',
        promos: 'o1neunz'
      }
    },
    search: '',
    filter: [],
    spreadsheet: {},
    cacheLifeTime: 1*60*60*1000, //hours*60*60*1000
  },

  /**
   * On creation get data
   */
  created: function () {
    this.getData();
  },

  methods: {
    /**
     * for each workbook.sheets get data
     */
    getData: function () {
      for ( var i in this.workbook.sheets ) {
        var sheetID = this.workbook.sheets[i];
        if ( ! this.getCache( sheetID )) {
          this.fetchData( this.workbook.id, sheetID );
        }
      }
    },
    /**
     * Capture data from spreadsheet
     * @param  {string} id    The workbook id
     * @param  {int} sheetID the sheetID or 1 indexed position of the sheet's tab
     * @return {[type]}    sends response to setData and putCache
     * @TODO error handling
     */
    fetchData: function ( id, sheetID ) {
      var xhr = new XMLHttpRequest(),
          self = this,
          url = 'https://spreadsheets.google.com/feeds/list/' + id +  '/' + sheetID + '/public/values?alt=json';
      xhr.open('GET', url )
      xhr.onload = function() {
        console.log('data loaded from xhr: ', sheetID);
        self.setData( xhr.responseText, sheetID );
        self.putCache( xhr.responseText, sheetID );
      }
      xhr.send(null)
    },
    /**
     * Sets the data into the spreadsheet object
     * @param  {string} data  The unparsed JSON string
     * @param  {string} sheetID the string reference for the workbook sheet
     */
    setData: function ( data, sheetID) {
      this.$set(this.spreadsheet, sheetID, JSON.parse( data ))
    },
    /**
     * Puts data in the localStorage
     * @param  {string} data  unparsed JSON string of data
     * @param  {string} sheetID the string reference for the workbook sheet
     */
    putCache: function ( data, sheetID ) {
      window.localStorage.setItem( sheetID , data );
      console.log('data cached');
    },
    /**
     * grabs only fresh data from the localStorage
     * @param  {string} sheetID the string reference for the workbook sheet
     * @return {bool} If data is pulled from cache returns true otherwise false
     */
    getCache: function ( sheetID ) {
      if ( this.cacheIsFresh() && window.localStorage.getItem( sheetID )  ) {
        this.setData( window.localStorage.getItem( sheetID ), sheetID )
        console.log('data loaded from cache:', sheetID);
        return true;
      }

      return false;

    },
    /**
     * Tests if the cache is fresh and resets the timer if not
     * @return {bool} if the cacheLifeTime is expired return false
     */
    cacheIsFresh: function () {
      var now = new Date().getTime();
      var setupTime = localStorage.getItem('setupTime');
      if (setupTime == null) {
          localStorage.setItem('setupTime', now);
          return false; // cache is NOT fresh
      } else {
          if(now - setupTime > this.cacheLifeTime) {
              localStorage.clear()
              localStorage.setItem('setupTime', now);
              console.log('cache reset');
              return false; // cache is NOT fresh
          }
          return true; // cache is fresh
      }
    },
    /**
     * Builds a src url to capture favion for a given URL
     * @param  {string} url a full URL for website
     * @return {string}     a url that will point to the favicon of submitted url
     */
    iconSrc: function ( url ) {
      return 'https://plus.google.com/_/favicon?domain=' + url;
    },
    /**
     * strips the http and www from a url
     * @param  {string} url a full URL for website
     * @return {string}     a url without the http and www
     * @TODO gracefull fail if url is null
     */
    stripHTTP: function ( url ) {
      var regex = new RegExp('(https?://(?:www.)?)','gi');
      return url.replace( regex, '' )
    },
    /**
     * Removes the trailing slash from a string
     * @param  {string} str string ready to have it's slash removed
     * @return {return}     string, now without a slash
     * @TODO gracefull fail if str is null
     */
    stripSlash: function ( str ) {
      return str.replace(/\/$/, "");
    },
    /**
     * Makes a URL pretty to look at
     * @param  {string} url a website url
     * @return {string}     a now pretty to look at url
     */
    prettyLink: function ( url ) {
      return this.stripSlash( this.stripHTTP( url ) );
    },
    /**
     * Extracts the amazon ASIN from a url string
     * @param  {string} url A url linking to an amazon product
     * @return {string}     the 10 character ASIN
     * @TODO handle strings without ASIN
     */
    amazonASIN: function ( url ) {
      if ( ! url ) return null;

      var rx = new RegExp('(?:[/dp/]|$)([A-Z0-9]{10})','g');
      // var rx = new RegExp('http://www.amazon.com/([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})','g');
      var arr = rx.exec( url );
      return arr[1];
    },
    /**
     * Adds Amazon affiliate tag to the end of a string
     * @param  {string} url an Amazon product URL
     * @return {string}     an Amazon product URL with a affiliate tag
     */
    amazonAffiliateLink: function ( url ) {
      if ( ! url ) return null;

      var id = 'drewinganddoi-20';
      // removes everything from the ? to the end of string
      if ( url.lastIndexOf('?') > 0) url = url.substring(0, url.lastIndexOf('?'));

      return this.stripSlash( url ) + '/?tag=' + id;
    },
    /**
     * Generates a product image url from amazon product URL
     * @param  {string} url Amazon product URL
     * @return {string}     URL pointing to product image
     * @TODO handle malformed url gracefully
     * @TODO allow choosing image size
     */
    amazonImageSrc: function ( url ) {
      if ( ! url ) return null;

      var size = [
      'THUMBZZZ',
      'MZZZZZZZ',
      'LZZZZZZZ'
      ];

      return 'https://images-na.ssl-images-amazon.com/images/P/' + this.amazonASIN( url ) + '.01.' + size[1] + '.jpg';
    },
    /**
     * Loops through Google Spreadsheet data and returns array of objects
     * constructed from callback
     * @param  {string} sheetID the string reference for the workbook sheet
     * @param  {function} action  a function which passes row data and vue object
     * @return {array}         array of row data, false if sheetID doesn't exist
     */
    gsxRowObject: function ( sheetID, action ) {
      if ( this.spreadsheet[sheetID] === undefined ) return false;
      var out  = [],
          rows = this.spreadsheet[sheetID].feed.entry,
          self = this;

      for (var i = 0; i < rows.length; i++) {
        var rowObj = action( rows[i], self );
        rowObj.filtered = function () {
          return self.filterTest(this);
        };
        out.push( rowObj );
      }

      return out;
    },
    /**
     * Gathers Google Spreadsheet cell data for a particular column
     * @param  {object} row data row from Google Spreadsheet object
     * @param  {string} col name of spreadsheet column to fetch
     * @return {string}     returns cell data, null if cell contains no data
     */
    gsxGetCol: function ( row, col ) {
      var cell = row['gsx$' + col];
      return ( cell && cell.$t ) ? cell.$t : null ;
    },
    /**
     * Tests if data object contains search term
     * @param  {object} e the 'this' of a row object
     * @return {bool}   True if search if empty or substring is found
     *                  within, otherwise false
     */
    filterTest: function (e) {
      var search = this.search.trim().toLowerCase();

      if ( '' == search ) return true; // no search means it's filtered

      var results = [];

      for ( var key in e ) {
        if ( typeof e[key] === 'string' &&
             e[key].toLowerCase().indexOf( search ) != -1 ) {

          results.push(e[key]);

        } else if ( typeof e[key] === 'object' &&
                    e[key] && e[key].join().toLowerCase().indexOf( search ) != -1 ) {

          results.push(e[key].join());

        }
      }

      if ( results.length == 0) return false;
      return true;
    }
  },

  computed: {
    /**
     * Generates an edit link to the Google Spreadsheet
     * @return {string} url to spreadsheet
     */
    workbookEditURL: function () {
      return 'https://docs.google.com/spreadsheets/d/' + this.workbook.id + '/edit';
    },
    /**
     * Creates a cleaned up array of row data objects
     * from the website sheets data
     * the string passed into gsxGetCol corrisponds to the column header
     * on the spreadsheet, lower case and without spaces
     * @return {array} array of objects
     */
    websites: function () {
      return this.gsxRowObject( this.workbook.sheets.websites , (r,self) => (
          {
            link: self.gsxGetCol( r, 'link'),
            referralLink: self.gsxGetCol( r, 'referrallink'),
            description: self.gsxGetCol( r, 'description'),
            icon: self.iconSrc( self.gsxGetCol( r, 'link') )
          })
        );
    },
    /**
     * Creates a cleaned up array of row data objects
     * from the books sheets data
     * the string passed into gsxGetCol corrisponds to the column header
     * on the spreadsheet, lower case and without spaces
     * @return {array} array of objects
     */
    books : function () {
      return this.gsxRowObject( this.workbook.sheets.books , function (r,self) {
        var link = self.gsxGetCol( r, 'amazonlink' );
        return {
          link: self.amazonAffiliateLink( link ),
          cover: self.amazonImageSrc( link ),
          title: self.gsxGetCol( r, 'title' ),
          description: self.gsxGetCol( r, 'description' )
        }
      });
    },
    /**
     * Creates a cleaned up array of row data objects
     * from the tools sheets data
     * the string passed into gsxGetCol corrisponds to the column header
     * on the spreadsheet, lower case and without spaces
     * @return {array} array of objects
     */
    tools: function () {
      return this.gsxRowObject( this.workbook.sheets.tools , function (r,self) {
        var tags = self.gsxGetCol( r, 'tags');
        return {
          link: self.gsxGetCol( r, 'website'),
          name: self.gsxGetCol( r, 'name'),
          description: self.gsxGetCol( r, 'description'),
          icon: self.iconSrc( self.gsxGetCol( r, 'website') ),
          // if there are tags split them into an array
          tags: (tags) ? self.gsxGetCol( r, 'tags').split(',') : false,
          referralLink: self.gsxGetCol( r, 'referrallink'),
          referralText: self.gsxGetCol( r, 'referraltext'),
        }
      });
    },
    /**
     * Creates a cleaned up array of row data objects
     * from the promos sheets data
     * the string passed into gsxGetCol corrisponds to the column header
     * on the spreadsheet, lower case and without spaces
     * @return {array} array of objects
     */
    promos: function () {
      return this.gsxRowObject( this.workbook.sheets.promos , (r,self) => (
        {
          code: self.gsxGetCol( r, 'promocode'),
          name: self.gsxGetCol( r, 'title'),
          description: self.gsxGetCol( r, 'description'),
          link: self.gsxGetCol( r, 'url'),
        })
      );
    },
  },
});


/**
* @TODO perhaps a better method: https://gist.github.com/juriansluiman/25cb3baf2c54ff8e0019
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
var trackOutboundLink = function(e) {
  // logic taken from https://gist.github.com/wei/34de0d72ff13ba45cafda661fc0e0449
  var a = e.target.closest('a')
  var url = a.href;
  var openingInNewWindow = (a.target && !a.target.match(/^_(self|parent|top)$/i)) || e.ctrlKey || e.shiftKey || e.metaKey;

  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': openingInNewWindow ? null : function(){ document.location = url; }
  });

  return openingInNewWindow;
}

app.$nextTick( function () {

  var a = document.links;

  for (var i = 0; i < a.length; i++) {
    if ( isExternalLink( a[i] )) {
      a[i].onclick = function (e) {
        return trackOutboundLink(e);
      }
    }
  }
});

function isExternalLink( linkObj ) {
  var host = window.location.hostname;

  return ( linkObj.hostname !== host );
}
