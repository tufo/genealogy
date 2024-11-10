/*
    <script src="https://cf.mhcache.com/Static/FP/Assets/JS/Members/PKindividualsComboBox_ve44ac401062d1b548acd512198f03b2f.js" type="text/javascript"  crossorigin="anonymous"></script><script src="" type="text/javascript" ></script><script type="text/javascript" >
*/

window.AutoComplete = function(e, t, i, s) {
    this.siteID = e, this.id = t, this.fld = jQuery("#" + t), this.pathToScript = ["", "FP", "API", "individual-lookup.php"].join("/"),
      this.searchStr = "", this.requestStr = "", this.responseStr = "", this.responseError = !1,
      this.clearOnSelect = !1, this.responseErrorCode = this.NO_ERROR, this.selectedIndividualObj = null,
      this.onFocusCallback = null, this.onEndSearchCallback = null, this.blurOnEnter = !1,
      this.smallSpinner = !1, this.notificationIcon = "PK_NotificationIcon PK_NotificationIconSmallYellowExclamationMark",
      this.errorIcon = "PK_NotificationIcon PK_NotificationIconSmallredExclamationMark",
      this.thumbnailType = window.isRecordPageFaceliftExposed ? 4 : 2, this.stdImageHeight = 0,
      this.stdImageWidth = 0, this.maxSearchResults = -1, this.dropdown = jQuery('<div class="dropdown" aria-live="assertive" aria-relevant="additions removals" aria-atomic="true" aria-label="Results list:"></div>'),
      this.addRelativeWrapper = !1, void 0 == s ? (this.addRelativeWrapper = !0, s = this.fld.parent()) : "string" == typeof s && (s = jQuery(s)),
      this.appendDropDownTo = s, this.curSel = -1, this.numRowsForScroll = 4, this.allowScrollInResults = !1,
      this.hideDropDownIfEmpty = !1, this.listeningToWindowHeight = !1, this.searchingText = "",
      this.LANG = "EN", this.LOADING_ANIMATION_GIF = "", this.DECEASD_RIBBON_CLASS = "PK_Silhouette PK_Silhouette_S_30_Ribbon",
      this.UNKNOWN_SILHOUETTE = "", this.MALE_SILHOUETTE = "", this.FEMALE_SILHOUETTE = "",
      this.MALE_SEARCH_STYLE = "drop-img-male", this.FEMALE_SEARCH_STYLE = "drop-img-female",
      this.UNKONWN_SEARCH_STYLE = "drop-img-unknown", this.flatLook = !1, this.dataLang = null,
      "undefined" != typeof searchingText && (this.searchingText = searchingText, this.noResultsFoundText = noResultsFoundText,
        this.BAD_REQUEST_MESSAGE = INDIVIDUAL_LOOKUP_ERROR_BAD_REQUEST_MESSAGE, this.DATABASE_ERROR_MESSAGE = INDIVIDUAL_LOOKUP_ERROR_DATABASE_ERROR_MESSAGE,
        this.TOO_MANY_INDIVIDUALS_MESSAGE = INDIVIDUAL_LOOKUP_ERROR_TOO_MANY_INDIVIDUALS_MESSAGE,
        this.GENERAL_ERROR_MESSAGE = INDIVIDUAL_LOOKUP_ERROR_GENERAL_ERROR_MESSAGE), "undefined" != typeof LANG && (this.LANG = LANG),
      "undefined" != typeof LOADING_ANIMATION_GIF && (this.LOADING_ANIMATION_GIF = LOADING_ANIMATION_GIF),
      "undefined" != typeof UNKNOWN_SILHOUETTE && (this.UNKNOWN_SILHOUETTE = UNKNOWN_SILHOUETTE,
        this.MALE_SILHOUETTE = MALE_SILHOUETTE, this.FEMALE_SILHOUETTE = FEMALE_SILHOUETTE,
        this.BOY_SILHOUETTE = BOY_SILHOUETTE, this.GIRL_SILHOUETTE = GIRL_SILHOUETTE, this.DECEASD_RIBBON = DECEASD_RIBBON),
      "undefined" != typeof AssetManager && (this.spacer = AssetManager.R_IMG("/FP/Images/spacer.gif")),
      this.KEYUP_DEBOUNCE_MS = 500, this.setEvents(), this.ie = !(!window.attachEvent || window.opera),
      this.ie && -1 != navigator.appVersion.indexOf("MSIE") && (this.ieVersion = parseFloat(navigator.appVersion.split("MSIE")[1])),
      this.opera = !!window.opera;
  }, AutoComplete.prototype = {
    NO_ERROR: 0,
    BAD_REQUEST: 100,
    DATABASE_ERROR: 101,
    TOO_MANY_INDIVIDUALS: 102,
    GENERAL_ERROR: 1e3,
    DROPDOWN_TYPE_ERROR: 0,
    DROPDOWN_TYPE_SEARCHING: 1,
    DROPDOWN_TYPE_SELECTION: 2,
    EXPANDED: !1,
    fetchInitialIndividualSearch: function() {
      if (this.fld.val().length >= 2) {
        this.searchStr = this.fld.val();
        var e = this;
        this.sendSearchRequest(this.searchStr, function(t, i) {
          e.onInitialFetchResponse(t, i);
        });
      }
    },
    fetchAllPeople: function() {
      this.searchStr = "_";
      var e = this;
      this.sendSearchRequest(this.searchStr, function(t, i) {
        e.onResponse(t, i);
      });
    },
    setEvents: function() {
      var e = this;
      this.fld.on("keydown", function(t) {
        e.onKeyDown(t);
      }), this.fld.on("keyup", _.debounce(function(t) {
        e.onKeyUp(t);
      }, e.KEYUP_DEBOUNCE_MS)), this.fld.change(function(t) {
        e.onChange(t);
      }), this.fld.focus(function(t) {
        e.onFocus(t);
      }), this.fld.on("blur", function(t) {
        e.onEndSearchCallback && "" == e.fld.val() && e.onEndSearchCallback();
      }), jQuery(document.body).click(function(t) {
        e.onBlur(t);
      });
    },
    onChange: function() {
      null != this.selectedIndividualObj && this.fld.val() != this.selectedIndividualObj.name && (this.selectedIndividualObj = null);
    },
    getFieldVal: function() {
      return void 0 == this.fld ? "" : this.fld.val();
    },
    onFocus: function() {
      this.getString(this.fld.val()), this.onFocusCallback && (this.moveDropdownToTextfield(),
        this.setHeightAfterSearch(), this.showDropdown(), this.onFocusCallback());
    },
    setNumRowsForScroll: function(e) {
      this.numRowsForScroll = e;
    },
    _onSelected: function(e, t) {
      var i = e.data("individual"),
        s = i.name.replace(/<b>/g, "").replace(/<\/b>/g, "");
      i.name = s, this.clearOnSelect ? this.fld.val("") : this.fld.val(i.nameAsPlainText),
        this.setClassAccordingToValue(), this.selectedIndividualObj = i, this.hideError(),
        this.onSelect && this.onSelect(i, this.id, e, t), this.onEndSearchCallback && "" == this.fld.val() && (this.onEndSearchCallback(),
          this.dropdown.empty());
    },
    cancelSearch: function(e) {
      this.fld.val(""), e && this.fld.trigger("blur"), this.setClassAccordingToValue(),
        this.dropdown.empty(), this.closeDropdown();
    },
    clearSelectedIndividual: function() {
      this.selectedIndividualObj = null;
    },
    getSelectedIndividual: function() {
      return this.selectedIndividualObj;
    },
    setFetchAllMode: function(e) {
      var t = jQuery("#" + this.id + "_wrapper"),
        i = t.find(".combo_box_magnify"),
        s = t.find(".combo_box_arrow");
      e ? (i.hide(), s.show()) : (s.hide(), i.show());
    },
    setRootIndividual: function(e) {
      this.fld.val(this.currentUserIndividualObj.name), this.fld.removeClass(), this.fld.addClass(e),
        this.selectedIndividualObj = this.currentUserIndividualObj, this.fetchInitialIndividualSearch(),
        this.hideError(), this.onPickMe && this.onPickMe(this.id, this.selectedIndividualObj);
    },
    onKeyDown: function(e) {
      var t = e.keyCode;
      switch (t) {
        case 13:
          this.isListCollapsed() ? this.onApply && this.onApply(e, this.id) : -1 != this.curSel && (this._onSelected(jQuery(".drop-item:nth-child(" + (this.curSel + 1) + ")", this.dropdown)),
            this.closeDropdown()), this.blurOnEnter && this.fld.trigger("blur");
          break;

        case 27:
          this.isListCollapsed() ? this.onCancel && this.onCancel(e, this.id) : this.closeDropdown(),
            e.preventDefault();
          break;

        case 38:
          this.dropdownType == this.DROPDOWN_TYPE_SELECTION && (this.moveSelectionUp(), this.doScroll()),
            e.preventDefault();
          break;

        case 40:
          this.dropdownType == this.DROPDOWN_TYPE_SELECTION && (this.moveSelectionDown(),
            this.doScroll()), e.preventDefault();
          break;

        case 35:
          this.dropdownType == this.DROPDOWN_TYPE_SELECTION && (this.moveSelectionEnd(), this.doScroll());
          break;

        case 36:
          this.dropdownType == this.DROPDOWN_TYPE_SELECTION && (this.moveSelectionHome(),
            this.doScroll());
          break;

        default:
          this.onChange && this.onChange(t, this.id), this.curSel = -1;
      }
    },
    onKeyPress: function(e) {},
    moveSelectionDown: function() {
      if ("none" != this.dropdown.css("display")) {
        var e = this.dropdown.children();
        if (-1 != this.curSel && this.curSel != e.length - 1 && this.deselectChild(this.curSel),
          this.curSel == e.length - 1) return;
        this.curSel++, this.selectChild(this.curSel);
      }
    },
    moveSelectionUp: function() {
      if ("none" != this.dropdown.css("display")) {
        if (-1 != this.curSel && 0 != this.curSel && this.deselectChild(this.curSel), -1 == this.curSel) return;
        if (0 == this.curSel) return;
        this.curSel--, this.selectChild(this.curSel);
      }
    },
    moveSelectionHome: function() {
      this.moveSelection(0);
    },
    moveSelectionEnd: function() {
      var e = this.dropdown.children();
      this.moveSelection(e.length - 1);
    },
    moveSelection: function(e) {
      "none" != this.dropdown.css("display") && (-1 != this.curSel && this.deselectChild(this.curSel),
        this.curSel = e, this.selectChild(this.curSel));
    },
    selectChild: function(e) {
      jQuery(".drop-item:nth-child(" + (e + 1) + ")", this.dropdown).addClass("sel");
    },
    deselectChild: function(e) {
      jQuery(".drop-item:nth-child(" + (e + 1) + ")", this.dropdown).removeClass("sel");
    },
    doScroll: function() {
      if (!(this.numRowsForScroll < 0)) {
        var e = this.dropdown.children();
        if (e.length > this.numRowsForScroll) {
          var t = jQuery(".drop-item:nth-child(" + (this.curSel + 1) + ")", this.dropdown);
          if (0 == t.length) return;
          var i = this.dropdown.scrollTop(),
            s = t.position().top + i,
            o = t.outerHeight();
          i > s ? this.dropdown.scrollTop(s) : t.position().top + o > this.dropdown.height() && this.dropdown.scrollTop(s + o - this.dropdown.height());
        }
      }
    },
    onBlur: function(e) {},
    doSearch: function(e) {
      var t = e.keyCode;
      switch (t) {
        case 27:
        case 38:
        case 40:
        case 35:
        case 36:
        case 13:
          return !1;
      }
      return !0;
    },
    onKeyUp: function(e) {
      this.doSearch(e) && this.getString(this.fld.val()), this.onAfterChange && this.onAfterChange(this.id),
        this.setClassAccordingToValue();
    },
    setClassAccordingToValue: function(e) {
      null != this.enableClearClassName && ("" == this.fld.val() ? this.fld.removeClass(this.enableClearClassName) : this.fld.addClass(this.enableClearClassName));
    },
    getString: function(e) {
      if (e.length < 2) this.dropdown.empty(), this.collapseList(0), this.searchStr = "",
        this.requestStr = "", this.responseStr = "";
      else if (this.searchStr != e)
        if (this.searchStr = e,
          "" == this.responseStr || 0 != this.searchStr.indexOf(this.responseStr)) {
          var t = this;
          this.sendSearchRequest(e, function(e, i) {
            t.onResponse(e, i);
          });
        } else this.collapseList(this.paint(this.searchLocal(e)));
    },
    prepareRE: function(e) {
      e = e.replace(/^\s+/, ""), e = e.replace(/\s+$/, ""), e = e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1"),
        e = e.replace(/\s+/g, " ");
      var t, i = '(^|\\s|[-"();])',
        s = e.split(" "),
        o = [],
        r = s.length;
      for (t = 0; r > t; t++) o[t] = new RegExp(i + "(" + s[t] + ")", "ig");
      return o;
    },
    searchLocal: function(e) {
      var t = new Array();
      if (this.json) {
        this.onServerResponse && this.onServerResponse(this.json, this.id);
        var i, s, o, r, n, h = this.prepareRE(e),
          a = this.json.length,
          l = h.length,
          d = [];
        for (s = 0; l > s; s++) {
          if (n = e.match(h[s]), null == n) return this.responseError = !0, this.responseErrorCode = this.GENERAL_ERROR,
            t;
          d[s] = n.length;
        }
        for (i = 0; a > i; i++) {
          if (o = this.json[i], "_" == e) r = l;
          else
            for (r = 0, s = 0; l > s && (n = o.nameAsPlainText.match(h[s]),
                n && n.length >= d[s]); s++) r++;
          r == l && t.push(o);
        }
      }
      return t;
    },
    boldMatchedAndSort: function(e, t) {
      e.sort(function(e, t) {
        return e.name.localeCompare(t.nameAsPlainText);
      });
      var i, s, o, r = this.prepareRE(t),
        n = (e.length, r.length);
      for (i = 0; i < e.length; i++) {
        for (o = e[i].nameAsPlainText, s = 0; n > s; s++) o = o.replace(r[s], "$1##BoldStartPlaceHolder##$2##BoldEndPlaceHolder##");
        e[i].name = o.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/##BoldStartPlaceHolder##/g, "<b>").replace(/##BoldEndPlaceHolder##/g, "</b>");
      }
      return e;
    },
    setErrorMessage: function() {
      this.errorMessage = jQuery("#" + this.errorMessageId);
    },
    showError: function() {
      "" != this.errorMessageId && null == this.errorMessage && this.setErrorMessage(),
        null != this.errorMessage && this.errorMessage.show();
    },
    hideError: function() {
      "" != this.errorMessageId && null == this.errorMessage && this.setErrorMessage(),
        null != this.errorMessage && this.errorMessage.hide();
    },
    setIsHideComboBoxesEnabled: function() {},
    sendSearchRequest: function(e, t) {
      if (this.requestStr != e || "" != this.responseStr) {
        this.paintSearching();
        var i = {
            siteID: this.siteID,
            query: e,
            thumbnailType: this.thumbnailType,
            displayLang: this.LANG,
            lang: this.LANG,
            skipServerFilter: 1,
            formatAsJSON: 1
          },
          s = [];
        this.shouldFilterDeceased && s.push(FILTER_DECEASED_PEOPLE), this.shouldFilterLiving && s.push(FILTER_LIVING_PEOPLE),
          this.shouldFilterTagshotIndividuals && s.push(FILTER_TAGSHOT_FAMILY_TREES), this.shouldFilterMales && s.push(FILTER_GENDER_MALE),
          this.shouldFilterFemales && s.push(FILTER_GENDER_FEMALE), s.length > 0 && (i.filter = s.join(",")),
          null != this.individualsToFilter && (i.individualsToFilter = this.individualsToFilter.join(",")),
          this.maxSearchResults > 0 && (i.maxResults = this.maxSearchResults), null != this.familyTreeID && (i.familyTreeID = this.familyTreeID),
          null != this.dataLang && (i.dataLang = this.dataLang), this.shouldRespectPrivacyLevel && (i.rpl = 1),
          this.requestStr = e, this.responseStr = "";
        var o = this;
        jQuery.ajax({
          url: this.pathToScript,
          type: "GET",
          data: i,
          dataType: "json",
          success: function(i, s, r) {
            "success" == s ? t(i, e) : (o.responseErrorCode = o.GENERAL_ERROR, o.OnRequestFailure());
          },
          error: function(e, t) {
            o.responseErrorCode = o.GENERAL_ERROR, o.OnRequestFailure();
          }
        });
      }
    },
    parseResponseJSON: function(e) {
      void 0 != e.errorCode ? (this.responseError = !0, this.responseErrorCode = e.errorCode) : (this.responseError = !1,
          this.responseErrorCode = this.NO_ERROR), this.numOfTreesInSite = 1, void 0 != e.numOfFamilyTresInSite && (this.numOfTreesInSite = e.numOfFamilyTresInSite,
          (isNaN(this.numOfTreesInSite) || this.numOfTreesInSite < 0) && (this.numOfTreesInSite = 1),
          this.responseStr = this.requestStr), void 0 != e.individuals ? this.json = e.individuals : this.json = new Array(),
        this.onServerResponse && this.onServerResponse(this.json, this.id);
    },
    onInitialFetchResponse: function(e, t) {
      this.parseResponseJSON(e), this.requestStr == t && this.closeDropdown();
    },
    onResponse: function(e, t) {
      if (0 == this.requestStr.indexOf(t)) {
        if (this.parseResponseJSON(e), this.responseError) return void(this.requestStr == t && this.paintError());
        try {
          this.collapseList(this.paint(this.searchLocal(this.searchStr))), this.bindEventsToDropdownListElements(this.dropdown);
        } catch (i) {
          alert(i);
        }
      }
    },
    safeGetNodeValue: function(e) {
      return null != e ? e.nodeValue : "";
    },
    OnRequestFailure: function(e) {
      this.paintError();
    },
    bindEventsToDropdownListElements: function(e) {
      var t = this;
      e.mouseover(function(e) {
        t.onmouseover(e);
      }), e.click(function(e) {
        t.onclick(e);
      });
    },
    getProperSelectedItem: function(e) {
      if (e.hasClass("drop-item")) return e;
      var t = e.parents(".drop-item");
      return t.length > 0 ? jQuery(t[0]) : null;
    },
    onclick: function(e) {
      if (!e.isPropagationStopped()) {
        var t = jQuery(e.target),
          i = this.getProperSelectedItem(t);
        i && (e.preventDefault(), e.stopPropagation(), this.closeDropdown(), this._onSelected(i, e));
      }
    },
    onmouseover: function(e) {
      var t = jQuery(e.target),
        i = this.getProperSelectedItem(t);
      i && i != this.curCelebItem && (-1 != this.curSel && this.deselectChild(this.curSel),
        this.curCelebItem = i, this.curCelebItem.addClass("sel"), this.getCurSel());
    },
    getCurSel: function() {
      if (this.curCelebItem)
        for (var e = 0; e < this.celebArray.length; e++) this.celebArray[e].id == this.curCelebItem.data("id") && (this.curSel = e);
      else this.curSel = -1;
    },
    renderProfilePhoto: function(e, t, i) {
      t = t || "U", i = i || "A";
      var s = '<div class="profile_photo_wrapper profile_photo gender_' + t + " age_group_" + i + ' style_circle">';
      return s += e ? '<div class="profile_photo" style="background-image: url(' + e + ')"></div>' : '<div class="autocomplete-image svg_silhouette svg_silhouette_' + t + "_" + i + '" role="presentation">',
        s += "</div>", jQuery(s);
    },
    createDiv: function(e) {
      var t;
      t = "F" == e.gender ? this.FEMALE_SEARCH_STYLE : "M" == e.gender ? this.MALE_SEARCH_STYLE : this.UNKONWN_SEARCH_STYLE;
      var i = jQuery('<a class="drop-item ' + t + '" href="#" tabindex="5" data-automations="individual-' + e.id + '"><div id="drop_img_' + e.id + '" class="drop-img"></div><div id="drop_text_' + e.id + '" class="drop-text"></div></a>'),
        s = i.find("#drop_img_" + e.id),
        o = i.find("#drop_text_" + e.id),
        r = null;
      "" != this.LOADING_ANIMATION_GIF && (r = jQuery('<img style="vertical-align:middle" src="' + this.LOADING_ANIMATION_GIF + '">'),
        r.appendTo(s));
      var n = null,
        h = this,
        a = function() {
          if (null != n && (n.onload = null), null != r && r.hide(), "" == e.path || null != n && (0 == n.width || 0 == n.height)) {
            var i = null;
            if (window.isRecordPageFaceliftExposed) i = h.renderProfilePhoto(e.path, e.gender);
            else {
              var o = h.UNKNOWN_SILHOUETTE;
              "M" == e.gender ? o = e.isChild ? h.BOY_SILHOUETTE : h.MALE_SILHOUETTE : "F" == e.gender && (o = e.isChild ? h.GIRL_SILHOUETTE : h.FEMALE_SILHOUETTE),
                i = o.indexOf("http") < 0 ? jQuery('<img class="autocomplete-image-silhouette ' + o + '" src="' + h.spacer + '" role="presentation">') : jQuery('<img class="autocomplete-image-silhouette" src="' + o + '" role="presentation">');
            }
            i.appendTo(s), s.show();
          } else {
            if (window.isRecordPageFaceliftExposed) i = h.renderProfilePhoto(e.path, e.gender);
            else {
              if (0 == h.stdImageHeight && 0 == h.stdImageWidth) {
                var a = jQuery('<img class="autocomplete-image" src="' + h.spacer + '" role="presentation">').appendTo(jQuery("body"));
                h.stdImageWidth = parseInt(a.css("width"), 10), h.stdImageHeight = parseInt(a.css("height"), 10),
                  a.remove();
              }
              var l = n.width,
                d = n.height,
                c = 0,
                p = 0,
                u = h.stdImageHeight / d,
                E = h.stdImageWidth / l;
              u > E ? (l = Math.round(u * l), d = h.stdImageHeight, c = Math.round((h.stdImageWidth - l) / 2)) : E > u ? (d = Math.round(E * d),
                l = h.stdImageWidth, p = Math.round((h.stdImageHeight - d) / 2)) : (l = h.stdImageWidth,
                d = h.stdImageHeight);
              var i, S = "background-size: " + l + "px " + d + "px;",
                f = "-o-" + S + "-webkit-" + S + "-moz-" + S + S;
              i = h.flatLook ? jQuery('<div class="autocomplete-image ' + t + '" style="background-image: url(' + e.path + ");" + f + "background-position: " + c + "px " + p + 'px;"></div>') : jQuery('<div class="drop-img-border"><img class="autocomplete-image" src="' + h.spacer + '" style="background-image: url(' + e.path + ");" + f + "background-position: " + c + "px " + p + 'px;"></div>');
            }
            i.appendTo(s), s.show();
          }
          e.isAlive || window.isRecordPageFaceliftExposed || jQuery('<img class="' + h.DECEASD_RIBBON_CLASS + '" src="' + h.spacer + '" role="presentation">').appendTo(s);
        };
      if ("" != e.path) {
        var n = document.createElement("img");
        n.src = e.path, (this.ie || this.opera) && n.complete ? a() : n.onload = n.onerror = a;
      } else a();
      var l = jQuery('<div class="autocomplete-name"></div>'),
        d = 0,
        c = 0;
      if (e.displayName = e.name, d++, "" != e.birthDate || !e.isAlive && "" != e.deathDate) {
        var p = "",
          u = "?",
          E = "?";
        "" != e.birthDate && 9 == e.birthDate.length && (u = e.birthDate.substr(0, 4)),
          e.isAlive || "" == e.deathDate || 9 != e.deathDate.length || (E = e.deathDate.substr(0, 4)),
          p += u, e.isAlive || (p += " - " + E), e.displayName += "<br><span class='autocomplete-date'>" + p + "</span>",
          d++;
      }
      "" != e.relationship && (e.displayName += "<br><span class='autocomplete-relation'>" + e.relationship + "</span>",
        d++), "" != e.familyTreeTitle && ("Tagshot" == e.familyTreeTitle ? (e.displayName += "<br><span class='ReducedSizeTextGreyLabel'>" + INDIVIDUAL_LOOKUP_NOT_IN_TREE_TEXT + "</span>",
        d++) : this.numOfTreesInSite > 1 && null == this.familyTreeID && (e.displayName += "<br>" + FAMILY_TREE_ICON + "<span class='ReducedSizeTextGreyLabel'>" + e.familyTreeTitle + "</span>",
        c++)), this.onBeforeShowItem && this.onBeforeShowItem(e, this.id);
      var S = 15 * d + 16 * c + 7;
      return S = Math.max(S, 53), this.maxRowHeight = Math.max(this.maxRowHeight, S),
        l.html(e.displayName), i.data("id", e.id), i.data("individual", e), l.appendTo(o),
        i;
    },
    moveDropdownToTextfield: function() {
      var e = this.dropdown.parent();
      if (0 == e.length) {
        if (this.addRelativeWrapper) {
          var t = jQuery('<div style="position:relative"></div>').appendTo(this.appendDropDownTo);
          this.appendDropDownTo = t, this.dropdown.css({
            position: "absolute"
          });
        }
        if (this.dropdown.appendTo(this.appendDropDownTo), this.ie && this.ieVersion < 8) {
          var i = this.dropdown.css("zIndex");
          this.dropdown.parents().css("zIndex", i + 101);
        }
      }
    },
    getErrorMessage: function() {
      var e = "";
      switch (parseInt(this.responseErrorCode)) {
        case this.BAD_REQUEST:
          e = this.BAD_REQUEST_MESSAGE;
          break;

        case this.DATABASE_ERROR:
          e = this.DATABASE_ERROR_MESSAGE;
          break;

        case this.TOO_MANY_INDIVIDUALS:
          e = this.TOO_MANY_INDIVIDUALS_MESSAGE;
          break;

        case this.GENERAL_ERROR:
          e = this.GENERAL_ERROR_MESSAGE;
      }
      return e;
    },
    createErrorDiv: function(e, t) {
      var i = this.notificationIcon;
      t && (i = this.errorIcon);
      var s = '<div class="drop-status"><table style="margin: 0 auto"><tr><td class="drop-status-icon"><img src="' + this.spacer + '" class="' + i + '"></td><td class="drop-status-text">' + e + "</td></tr></table></div>";
      return s;
    },
    paintError: function() {
      this.dropdown.html(this.createErrorDiv(this.getErrorMessage(), this.responseErrorCode != this.TOO_MANY_INDIVIDUALS)),
        this.moveDropdownToTextfield(), this.setHeightAfterSearch(), this.dropdownType = this.DROPDOWN_TYPE_ERROR;
    },
    createSearchingDiv: function() {
      var e = this.smallSpinner ? 20 : 33;
      return '<div class="drop-status"><div class="drop-status-icon" id="searchingContainer"><img src="' + this.spacer + '" height="' + e + '" width="' + e + '"></div></div>';
    },
    paintSearching: function() {
      this.isListCollapsed() && (this.setHeightAfterSearch(), this.moveDropdownToTextfield(),
        this.showDropdown()), this.dropdown.html(this.createSearchingDiv());
      var e = 12,
        t = 8,
        i = 3,
        s = 11;
      this.smallSpinner && (e = 12, t = 4, i = 1, s = 4);
      var o = {
        lines: e,
        length: t,
        width: i,
        radius: s,
        color: "#6E6E6E",
        speed: .8,
        trail: 100,
        shadow: !1
      };
      jQuery("#searchingContainer").spin(o), this.dropdownType = this.DROPDOWN_TYPE_SEARCHING;
    },
    paintNoResultsFound: function() {
      this.dropdown.html(this.createErrorDiv(this.noResultsFoundText, !1)), this.moveDropdownToTextfield(),
        this.setHeightAfterSearch(), this.dropdownType = this.DROPDOWN_TYPE_SEARCHING;
    },
    setHeightAfterSearch: function() {
      if (this.numRowsForScroll < 0) {
        if ("" == this.searchStr && this.hideDropDownIfEmpty) return void this.closeDropdown();
        var e = jQuery(window).height();
        if (!this.listeningToWindowHeight) {
          this.listeningToWindowHeight = !0;
          var t = this;
          jQuery(window).resize(function() {
            null != t.dropdown && t.dropdown.is(":visible") && t.resizeHeightAfterSearch(jQuery(window).height());
          });
        }
        this.resizeHeightAfterSearch(e);
      } else this.dropdown.css("height", "auto");
    },
    resizeHeightAfterSearch: function(e) {
      var t = parseInt(this.dropdown.css("top"), 10);
      if (!isNaN(t)) {
        var i = e - t,
          s = 0,
          o = jQuery(".drop-item:last-child", this.dropdown);
        o.length > 0 && (s = o.position().top + o.outerHeight());
        var r;
        r = this.allowScrollInResults ? i : Math.max(i, s), this.flatLook ? this.dropdown.height("auto") : this.dropdown.height(r),
          0 >= r && 0 == this.dropdown.find(".drop-status").length && this.dropdown.hide();
      }
    },
    paint: function(e) {
      if (this.celebArray = e, this.dropdown.empty(), this.boldMatchedAndSort(e, this.fld.val()),
        e)
        for (var t = 0; t < e.length; t++) {
          var i = this.createDiv(e[t]);
          i.appendTo(this.dropdown);
        }
      this.moveDropdownToTextfield(), this.showDropdown(), this.dropdownType = this.DROPDOWN_TYPE_SELECTION;
      var s = this.dropdown.children();
      return s.length > 0 ? (this.moveSelectionHome(), this.doScroll(s), this.hideError()) : this.paintNoResultsFound(),
        this.bindEventsToDropdownListElements(this.dropdown), e ? e.length : 0;
    },
    closeDropdown: function() {
      this.curSel = -1, this.dropdown.height(0), this.dropdown.hide(), this.searchStr = "",
        this.requestStr = "", this.responseStr = "", jQuery("body").unbind("click", this.closeDropdownFromClick);
    },
    closeDropdownFromClick: function(e) {
      if ("FindAPerson" != jQuery(e.target).attr("id")) {
        var t = e.data.context;
        t.closeDropdown();
      }
    },
    showDropdown: function() {
      if (!this.dropdown.is(":visible")) {
        this.dropdown.show();
        var e = this;
        window.setTimeout(function() {
          jQuery("body").bind("click", {
            context: e
          }, e.closeDropdownFromClick);
        }, 10);
      }
    },
    collapseList: function(e) {
      if (this.numRowsForScroll < 0) return void this.setHeightAfterSearch();
      if (0 == e && this.dropdownType != this.DROPDOWN_TYPE_SEARCHING) return void this.closeDropdown();
      if (e > this.numRowsForScroll) {
        var t = jQuery(".drop-item:nth-child(" + this.numRowsForScroll + ")", this.dropdown);
        if (0 == t.length) return void this.dropdown.css("height", "auto");
        var i = t.position().top - this.dropdown.position().top + t.outerHeight();
        this.dropdown.height(i);
      } else this.dropdown.css("height", "auto");
      0 >= e && 0 == this.dropdown.find(".drop-status").length && this.dropdown.hide(),
        this.scrollDropdownIntoView();
    },
    isListCollapsed: function() {
      return 0 == this.dropdown.height() || "none" == this.dropdown.css("display");
    },
    scrollDropdownIntoView: function() {
      if (null != this.dropdown) {
        var e = this.dropdown.height();
        if (!(0 >= e)) {
          var t = this.dropdown.offset().top,
            i = jQuery("body"),
            s = jQuery(window),
            o = i.scrollTop() + s.height(),
            r = t + e;
          if (!(o > r)) {
            var n = r - o;
            i.scrollTop(n + i.scrollTop());
          }
        }
      }
    }
  };
