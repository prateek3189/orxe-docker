'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">orxe-docker documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"' : 'data-target="#xs-components-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"' : 'id="xs-components-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/ApiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApiComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/CodepenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodepenComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ComponentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComponentsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/DescriptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DescriptionComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/OverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#directives-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"' : 'data-target="#xs-directives-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"') + '>\n                                    <span class="icon ion-md-code-working"></span>\n                                    <span>Directives</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="directives-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"' : 'id="xs-directives-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="directives/ComponentLoaderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComponentLoaderDirective</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"' : 'data-target="#xs-injectables-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"' : 'id="xs-injectables-links-module-AppModule-43b92a4df96108539d3ee4d429e0b56d"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/ComponentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ComponentService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"') + '>\n                        <span class="icon ion-md-cog"></span>\n                        <span>Components</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="components-links"' : 'id="xs-components-links"') + '>\n                        \n                            <li class="link">\n                                <a href="components/DefualtAMButtonComponent.html" data-type="entity-link">DefualtAMButtonComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/DefualtAMMenuListComponent.html" data-type="entity-link">DefualtAMMenuListComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/DemoComponent.html" data-type="entity-link">DemoComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/TaviscaButtonComponent.html" data-type="entity-link">TaviscaButtonComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/TaviscaInputComponent.html" data-type="entity-link">TaviscaInputComponent</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/Data.html" data-type="entity-link">Data</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/ComponentdataService.html" data-type="entity-link">ComponentdataService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/ComponentService.html" data-type="entity-link">ComponentService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/IComponentData.html" data-type="entity-link">IComponentData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/IHaveDynamicData.html" data-type="entity-link">IHaveDynamicData</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));