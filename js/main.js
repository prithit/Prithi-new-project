var app = angular.module("NaturalLanguageApp", []);
app.controller("NaturalLanguageCtrl", function () {
    var vm = this;
    vm.selectText = ["solution", "solution win"];
    vm.selectedSolutionText = "solution";
    vm.selectedProductText = "any product";
    vm.selectedIndustryText = "any industry";
    vm.industries = [];
    vm.products = [];
    vm.results = [];

    vm.solutionsJson = [
        {
            "name": "Solution 1",
            "industry": "Finance",
            "product": "ITOM"
        },
        {
            "name": "Solution 2",
            "industry": "Finance",
            "product": "ITSM"
        },
        {
            "name": "Solution 3",
            "industry": "Education",
            "product": "ITSM"
        },
        {
            "name": "Solution 4",
            "industry": "Media",
            "product": "HR Service Automation"
        },
        {
            "name": "Solution 5",
            "industry": "Federal",
            "product": "ITSM"
        },
        {
            "name": "Solution 6",
            "industry": "Federal",
            "product": "ITBM"
        },
        {
            "name": "Solution 7",
            "industry": "Retail",
            "product": "Knowledge Management"
        },
        {
            "name": "Solution 8",
            "industry": "Retail",
            "product": "SIAM"
        },
        {
            "name": "Solution 9",
            "industry": "Technology",
            "product": "Work Management"
        },
        {
            "name": "Solution 10",
            "industry": "Services",
            "product": "Asset Management"
        }
    ];

    vm.solutionWins = [
        {
            "name": "Solution Wins 1",
            "industry": "Finance",
            "product": "IT Cost Management"
        },
        {
            "name": "Solution Wins 2",
            "industry": "Finance",
            "product": "Facilities Service Management"
        },
        {
            "name": "Solution Wins 3",
            "industry": "Education",
            "product": "Facilities Service Management"
        },
        {
            "name": "Solution Wins 4",
            "industry": "Media",
            "product": "HR Service Automation"
        },
        {
            "name": "Solution Wins 5",
            "industry": "Federal",
            "product": "Facilities Service Management"
        },
        {
            "name": "Solution Wins 6",
            "industry": "Federal",
            "product": "IT Governance, Risk, and Compliance"
        },
        {
            "name": "Solution Wins 7",
            "industry": "Media",
            "product": "Knowledge Management"
        },
        {
            "name": "Solution Wins 8",
            "industry": "Media",
            "product": "IT Governance, Risk, and Compliance"
        },
        {
            "name": "Solution Wins 9",
            "industry": "Technology",
            "product": "Work Management"
        },
        {
            "name": "Solution Wins 10",
            "industry": "Technology",
            "product": "Asset Management"
        }
    ];

    vm.getIndustries = function (selectedType) {
         vm.selectedIndustryText = "any industry";
        vm.selectedSolutionText = selectedType;
        vm.products = [];
        vm.industries = [];
        if (selectedType === "solution") {
            vm.results = vm.solutionsJson;
            for (var index in vm.solutionsJson) {
                var industry = vm.solutionsJson[index].industry;
                if (vm.industries.indexOf(industry) === -1)
                    vm.industries.push(vm.solutionsJson[index].industry);
            }
        }
        else {
            vm.results = vm.solutionWins;
            for (var index in vm.solutionWins) {
                var industry = vm.solutionWins[index].industry;
                if (vm.industries.indexOf(industry) === -1)
                    vm.industries.push(vm.solutionWins[index].industry);
            }
        }
    };

    vm.getProducts = function (selectedIndustryText) {
        vm.selectedProductText = "any product";
        vm.selectedIndustryText = selectedIndustryText;
        vm.products = [];
        if (vm.selectedSolutionText === "solution") {
            var json = vm.solutionsJson.filter(x => x.industry === selectedIndustryText);
            vm.results = json;
            for (var index in json) {
                var product = json[index].product;
                if (vm.products.indexOf(product) === -1)
                    vm.products.push(json[index].product);
            }
        } else {
            var json = vm.solutionWins.filter(x => x.industry === selectedIndustryText);
            vm.results = json;
            for (var index in json) {
                var product = json[index].product;
                if (vm.products.indexOf(product) === -1)
                    vm.products.push(json[index].product);
            }
        }
    };

    vm.setProduct = function (product) {
        vm.selectedProductText = product;
    };

    vm.toggleOpen = function (id) {
        if (id === "#solution_id") {
            angular.element("#product_id").removeClass("open");
            angular.element("#industry_id").removeClass("open");
        }
        else if (id === "#industry_id") {
            angular.element("#product_id").removeClass("open");
            angular.element(" #solution_id").removeClass("open");
        }
        else if ("#product_id") {
            angular.element("#solution_id").removeClass("open");
            angular.element("#industry_id").removeClass("open");
        }
        angular.element(id).toggleClass("open");
    };

    vm.removeOpenClass = function () {
        angular.element(" #solution_id").removeClass("open");
        angular.element("#product_id").removeClass("open");
        angular.element("#industry_id").removeClass("open");
    };

    // Load industries for the first time based on initial solution text
    vm.getIndustries(vm.selectedSolutionText);

});