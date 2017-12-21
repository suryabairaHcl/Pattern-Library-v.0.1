function enableTxt(elem) {
    var id = $(elem).attr("id");
    alert(id);
}

document.getElementById("navMenu").innerHTML =
        '<ul class="styleguide-navigation">'+
            
            
            '<li class="framwork-components"><ul>Framework Components'+
                '<li><a id="toolbar" href="./index.html">Home</a></li>'+
                '<li><a id="toolbar" href="./tool-bar.html" onclick=menuClick(this.id)>Toolbar</a></li>'+
                '<li class=""><a href="./left-nav.html">Navigation-Primary (Left Nav)</a></li>'+
                '<li class=""><a href="./help-support.html">Help & Support</a></li>'+
                '<li class=""><a href="./task-panel.html">Task/Notification Panel</a></li>'+
                '<li class=""><a href="./Breadcrumbs.html">Breadcrumbs</a></li>'+
                '<li class=""><a href="./tabs.html">Navigation-Secondary (Tabs)</a></li>'+
                '<li class=""><a href="./vertical-nav.html">Navigation-Vertical</a></li>'+
                // '<li class=""><a href="./inprogress.html">Form and Templates Panel</a></li>'+
                '<li class=""><a href="./header-ribbon.html">Header Ribbon</a></li>'+
                '<li class=""><a href="./footer-wAction.html">Footer w/ Actions</a></li>'+
                '<li class=""><a href="./cards.html">Cards- different types of cards</a></li>'+
                '<li class="pending"><a href="" disabled>Timeline(pending approval)</a></li>'+
                '<li class="pending"><a href="" disabled>Project Cycle(pending approval)</a></li>'+
                // '<li class=""><a href="./inprogress.html">Bulk Edit</a></li>'+
                '<li class=""><a href="./filters.html">Filters</a></li>'+
                // '<li class=""><a href="./inprogress.html">Lightbox</a></li>'+
                '</ul>'+
            '</li>'+
            '<li class="framwork-components"><ul>Form Controls'+
                '<li class=""><a href="./date-picker.html">Date Picker</a></li>'+
                '<li class=""><a href="./time-picker.html">Time Picker</a></li>'+
                '<li class=""><a href="./radio-button.html">Radio Buttons</a></li>'+
                '<li class=""><a href="./check-box.html">Check Box</a></li>'+
                '<li class=""><a href="./buttons.html">Buttons</a></li>'+
                '<li class=""><a href="./input-field.html">Input fields (inc scalable text field)</a></li>'+
                '<li class=""><a href="./links.html">Links (Actionable links)</a></li>'+
                '<li class=""><a href="./toggle-switch.html">Toggle / Switch</a></li>'+
                '</ul>'+
            '</li>'+
            '<li class="framwork-components"><ul>Selection Control'+
                '<li class=""><a href="./dropdown.html">Dropdown</a></li>'+
                '<li class=""><a href="./selection-multiselect.html">Multi select dropdown</a></li>'+
                '</ul>'+
            '</li>'+
            '<li class="framwork-components"><ul>Misc'+
                '<li class=""><a href="./Pagination.html">Pagination</a></li>'+
                '<li class=""><a href="./activitynprogress.html">Progress & Background Activity</a></li>'+
                '</ul>'+
            '</li>'+
            '<li class="framwork-components"><ul>Data Pattern'+
                '<li class=""><a href="./data-list.html">List style for pages</a></li>'+
                '<li class=""><a href="./list-cards.html">List style for cards</a></li>'+
                // '<li class=""><a href="./inprogress.html">Charts</a></li>'+
                '</ul>'+
            '</li>'+
            '<li class="framwork-components"><ul>Messaging'+
                '<li class=""><a href="./page-break.html">Page break</a></li>'+
                '<li class=""><a href="./message-toast.html">Toast messages</a></li>'+
                '<li class=""><a href="./message-contextual.html">Contextual </a></li>'+
                '<li class=""><a href="./message-modal.html">Modal</a></li>'+
                '</ul>'+
            '</li>'+
            '<li class="framwork-components"><ul>Search Components'+
                // '<li class=""><a href="./inprogress.html">Search- type ahead interactions</a></li>'+
                // '<li class=""><a href="./inprogress.html">Search results- card view, list view</a></li>'+
                '<li class=""><a href="./Advance-search.html">Advanced Search</a></li>'+
                '</ul>'+
            '</li>'+
        '</ul>';