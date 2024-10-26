const data = {
    "sports": {
        "football": {
            'image': "fa-futbol",
            "country_specific_leagues": {
                "england": { "name": "Premier League", "flag": "flags/england.png", "logo": "leagues/premier_league.png" },
                "spain": { "name": "La Liga", "flag": "flags/spain.png", "logo": "leagues/la_liga.png" },
                "italy": { "name": "Serie A", "flag": "flags/italy.png", "logo": "leagues/serie_a.png" },
                "france": { "name": "Ligue 1", "flag": "flags/france.png", "logo": "leagues/ligue_1.png" },
                "portugal": { "name": "Primeira Liga", "flag": "flags/portugal.png", "logo": "leagues/primeira_liga.png" },
                "netherlands": { "name": "Eredivisie", "flag": "flags/netherlands.png", "logo": "leagues/eredivisie.png" },
                "belgium": { "name": "Pro League", "flag": "flags/belgium.png", "logo": "leagues/pro_league.png" },
                "scotland": { "name": "Scottish Premiership", "flag": "flags/scotland.png", "logo": "leagues/scottish_premiership.png" },
                "turkey": { "name": "Süper Lig", "flag": "flags/turkey.png", "logo": "leagues/super_lig.png" },
                "russia": { "name": "Russian Premier League", "flag": "flags/russia.png", "logo": "leagues/russian_premier_league.png" },
                "sweden": { "name": "Allsvenskan", "flag": "flags/sweden.png", "logo": "leagues/allsvenskan.png" },
                "austria": { "name": "Austrian Bundesliga", "flag": "flags/austria.png", "logo": "leagues/austrian_bundesliga.png" },
                "denmark": { "name": "Danish Superliga", "flag": "flags/denmark.png", "logo": "leagues/danish_superliga.png" },
                "greece": { "name": "Super League Greece", "flag": "flags/greece.png", "logo": "leagues/super_league_greece.png" },
                "switzerland": { "name": "Swiss Super League", "flag": "flags/switzerland.png", "logo": "leagues/swiss_super_league.png" },
                "ukraine": { "name": "Ukrainian Premier League", "flag": "flags/ukraine.png", "logo": "leagues/ukrainian_premier_league.png" },
                "romania": { "name": "Liga I", "flag": "flags/romania.png", "logo": "leagues/liga_i.png" },
                "serbia": { "name": "Serbian SuperLiga", "flag": "flags/serbia.png", "logo": "leagues/serbian_superliga.png" },
                "norway": { "name": "Eliteserien", "flag": "flags/norway.png", "logo": "leagues/eliteserien.png" },
                "finland": { "name": "Veikkausliiga", "flag": "flags/finland.png", "logo": "leagues/veikkausliiga.png" },
                "israel": { "name": "Israeli Premier League", "flag": "flags/israel.png", "logo": "leagues/israeli_premier_league.png" },
                "czech_republic": { "name": "Czech First League", "flag": "flags/czech_republic.png", "logo": "leagues/czech_first_league.png" }
            }
        },
        "cricket": {
            "image": "fa-baseball-ball",
            "country_specific_leagues": {
                "india": { "name": "Indian Premier League", "flag": "flags/india.png", "logo": "leagues/ipl.png" },
                "australia": { "name": "Big Bash League", "flag": "flags/australia.png", "logo": "leagues/bbl.png" },
                "england": { "name": "Vitality T20 Blast", "flag": "flags/england.png", "logo": "leagues/t20_blast.png" },
                "west_indies": { "name": "Caribbean Premier League", "flag": "flags/west_indies.png", "logo": "leagues/cpl.png" },
                "south_africa": { "name": "Mzansi Super League", "flag": "flags/south_africa.png", "logo": "leagues/msl.png" },
                "new_zealand": { "name": "Super Smash", "flag": "flags/new_zealand.png", "logo": "leagues/super_smash.png" },
                "pakistan": { "name": "Pakistan Super League", "flag": "flags/pakistan.png", "logo": "leagues/psl.png" },
                "bangladesh": { "name": "Bangladesh Premier League", "flag": "flags/bangladesh.png", "logo": "leagues/bpl.png" },
                "ireland": { "name": "Ireland Inter-Provincial Series", "flag": "flags/ireland.png", "logo": "leagues/ip.png" }
            }
        },
        "basketball": {
            "image": "fa-basketball-ball",
            "country_specific_leagues": {
                "usa": { "name": "NBA", "flag": "flags/usa.png", "logo": "leagues/nba.png" },
                "spain": { "name": "Liga ACB", "flag": "flags/spain.png", "logo": "leagues/liga_acb.png" },
                "turkey": { "name": "Basketball Super League", "flag": "flags/turkey.png", "logo": "leagues/bsl.png" },
                "france": { "name": "LNB Pro A", "flag": "flags/france.png", "logo": "leagues/lnb.png" },
                "italy": { "name": "Lega Basket Serie A", "flag": "flags/italy.png", "logo": "leagues/lega_basket.png" },
                "australia": { "name": "NBL", "flag": "flags/australia.png", "logo": "leagues/nbl.png" },
                "philippines": { "name": "PBA", "flag": "flags/philippines.png", "logo": "leagues/pba.png" },
                "japan": { "name": "B.League", "flag": "flags/japan.png", "logo": "leagues/b_league.png" },
                "greece": { "name": "Greek Basket League", "flag": "flags/greece.png", "logo": "leagues/greek_basket_league.png" },
                "lithuania": { "name": "LKL", "flag": "flags/lithuania.png", "logo": "leagues/lkl.png" }
            }
        },
        "hockey": {
            "image": "fa-hockey-puck",
            "country_specific_leagues": {
                "usa": { "name": "NHL", "flag": "flags/usa.png", "logo": "leagues/nhl.png" },
                "canada": { "name": "OHL", "flag": "flags/canada.png", "logo": "leagues/ohl.png" },
                "russia": { "name": "KHL", "flag": "flags/russia.png", "logo": "leagues/khl.png" },
                "sweden": { "name": "SHL", "flag": "flags/sweden.png", "logo": "leagues/shl.png" },
                "finland": { "name": "Liiga", "flag": "flags/finland.png", "logo": "leagues/liiga.png" },
                "czech_republic": { "name": "Czech Extraliga", "flag": "flags/czech_republic.png", "logo": "leagues/czech_extraliga.png" },
                "germany": { "name": "DEL", "flag": "flags/germany.png", "logo": "leagues/del.png" },
                "switzerland": { "name": "NL", "flag": "flags/switzerland.png", "logo": "leagues/nl.png" }
            }
        },
        "tennis": {
            "image": "fa-table-tennis",
            "country_specific_leagues": {
                "usa": { "name": "USTA", "flag": "flags/usa.png", "logo": "leagues/usta.png" },
                "france": { "name": "French Open", "flag": "flags/france.png", "logo": "leagues/french_open.png" },
                "australia": { "name": "Australian Open", "flag": "flags/australia.png", "logo": "leagues/australian_open.png" },
                "uk": { "name": "Wimbledon", "flag": "flags/uk.png", "logo": "leagues/wimbledon.png" },
                "canada": { "name": "Canadian Open", "flag": "flags/canada.png", "logo": "leagues/canadian_open.png" },
                "italy": { "name": "Italian Open", "flag": "flags/italy.png", "logo": "leagues/italian_open.png" },
                "germany": { "name": "German Open", "flag": "flags/germany.png", "logo": "leagues/german_open.png" }
            }
        },
        "volleyball": {
            "image": "fa-volleyball-ball",
            "country_specific_leagues": {
                "usa": { "name": "AVP Pro Beach Volleyball Tour", "flag": "flags/usa.png", "logo": "leagues/avp.png" },
                "brazil": { "name": "Campeonato Brasileiro de Vôlei", "flag": "flags/brazil.png", "logo": "leagues/brazil_volleyball.png" },
                "italy": { "name": "Serie A", "flag": "flags/italy.png", "logo": "leagues/italy_volleyball.png" },
                "russia": { "name": "Superleague", "flag": "flags/russia.png", "logo": "leagues/russia_volleyball.png" },
                "japan": { "name": "V.League", "flag": "flags/japan.png", "logo": "leagues/japan_volleyball.png" },
                "turkey": { "name": "Sultanlar Ligi", "flag": "flags/turkey.png", "logo": "leagues/turkey_volleyball.png" },
                "france": { "name": "Ligue A", "flag": "flags/france.png", "logo": "leagues/france_volleyball.png" },
                "germany": { "name": "Bundesliga", "flag": "flags/germany.png", "logo": "leagues/germany_volleyball.png" }
            }
        }
    }
};

$(document).ready(function () {
    populateSports();
    displayAllLeagues();
    checkFavorites();


    // Populate the sports list
    function populateSports() {
        const sportsList = $('#sports-list');
        for (const sport in data.sports) {
            sportsList.append(`
                    <li  class="sport-item" data-sport='${sport}'>
                        <span class="sport-name"><i class="fas ${data.sports[sport].image}"></i> ${sport.charAt(0).toUpperCase() + sport.slice(1)}</span>
            <i class="far fa-heart heart-icon"></i>
                    </li>
                `);
        }
    }

    // Populate the league list for a specific sport
    function populateLeagues(sport) {
        const leagueList = $("#league-list");
        leagueList.empty();
        let leagueCount = 0;
        for (let country in data.sports[sport].country_specific_leagues) {
            const league = data.sports[sport].country_specific_leagues[country];
            leagueList.append(`
                    <div class="col league-card p-2">
                        <div class="card">
                            <img src="./Assets/images/leagues/${league.name.toLowerCase()}.png" class="card-img-top" alt="${league.name} Logo">
                            <div class="card-body bg-dark text-white">
                                <h5 class="card-title">${league.name}</h5>
                                <p class="card-text">${country.charAt(0).toUpperCase() + country.replace(/_/g, ' ').slice(1)}</p>
                            </div>
                        </div>
                    </div>
                `);
            leagueCount++;
        }
        $("#total-count").text(`Total Leagues: ${leagueCount}`);
    }

    // Display all leagues by default
    function displayAllLeagues() {
        const leagueList = $("#league-list");
        leagueList.empty();
        let leagueCount = 0;

        for (let sport in data.sports) {
            for (let country in data.sports[sport].country_specific_leagues) {
                const league = data.sports[sport].country_specific_leagues[country];
                leagueList.append(`
                        <div class="col league-card p-2">
                            <div class="card">
                                <img src="./Assets/images/leagues/${league.name.toLowerCase()}.png" class="card-img-top" alt="${league.name} Logo">
                                <div class="card-body bg-dark text-white">
                                    <h5 class="card-title">${league.name}</h5>
                                    <p class="card-text">${country.charAt(0).toUpperCase() + country.replace(/_/g, ' ').slice(1)}</p>
                                </div>
                            </div>
                        </div>
                    `);
                leagueCount++;
            }
        }
        $("#total-count").text(`Total Leagues: ${leagueCount}`);
    }

    // Filter sports list based on search input
    $('#search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        $('#sports-list li').each(function () {
            const sportName = $(this).data('sport').toLowerCase();
            $(this).toggle(sportName.includes(searchTerm));
        });
    });

    // Event listener for sports selection
    $(document).on("click", ".sport-item", function () {
        const sport = $(this).data("sport");
        populateLeagues(sport);

    });

    // Search functionality for leagues
    $("#search-league").on("keyup", function () {
        const searchTerm = $(this).val().toLowerCase();
        $(".league-card").filter(function () {
            $(this).toggle($(this).find("h5").text().toLowerCase().includes(searchTerm));
        });
        const visibleCount = $(".league-card:visible").length;
        $("#total-count").text(`Total Leagues: ${visibleCount}`);
    });

    $('.sport-item').on('dblclick', function () {
        const heartIcon = $(this).find('.heart-icon');
        const sportName = $(this).data('sport');

        if (heartIcon.hasClass('far')) {
            // If it's currently not selected (unfilled heart)
            heartIcon.removeClass('far').addClass('fas'); // Make the heart filled
            addToFavorites(sportName);
        } else {
            // If it's currently selected (filled heart)
            heartIcon.removeClass('fas').addClass('far'); // Make the heart unfilled
            removeFromFavorites(sportName);

        }
        checkFavorites();
    });

    // Function to add selected sport to favorites list
    function addToFavorites(sportName) {
        const favoriteItem = $('<li></li>')
            .addClass('favorite-sport sport-item')
            .attr('data-sport', sportName)
            .text(sportName)
            .prepend(`<i class="fas ${data.sports[sportName].image} pe-1"></i>`);

        $('#favorite-sports-container').append(favoriteItem);
    }

    // Function to remove deselected sport from favorites list
    function removeFromFavorites(sportName) {
        $(`.favorite-sport[data-sport="${sportName}"]`).remove();
    }

    function checkFavorites() {
        const favoritesCount = $('.favorite-sport').length;

        if (favoritesCount === 0) {
            // If no favorites, show the "Select your favorite sport" message
            $('.no-favorites').show();
        } else {
            // If favorites exist, hide the message
            $('.no-favorites').hide();
        }
    }

    // Initially check if there are any favorites selected

});