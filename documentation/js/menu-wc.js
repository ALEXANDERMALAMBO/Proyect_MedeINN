'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nice-admin-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-387c5e7f309e60e22365557548f401ee510f42ee6550b718120d3ad0e811e6cac93c07dd329ee8bd0bdc2b86401a5c5c35962417a873bb16c27bfbc57e6c68c4"' : 'data-target="#xs-components-links-module-AppModule-387c5e7f309e60e22365557548f401ee510f42ee6550b718120d3ad0e811e6cac93c07dd329ee8bd0bdc2b86401a5c5c35962417a873bb16c27bfbc57e6c68c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-387c5e7f309e60e22365557548f401ee510f42ee6550b718120d3ad0e811e6cac93c07dd329ee8bd0bdc2b86401a5c5c35962417a873bb16c27bfbc57e6c68c4"' :
                                            'id="xs-components-links-module-AppModule-387c5e7f309e60e22365557548f401ee510f42ee6550b718120d3ad0e811e6cac93c07dd329ee8bd0bdc2b86401a5c5c35962417a873bb16c27bfbc57e6c68c4"' }>
                                            <li class="link">
                                                <a href="components/ActionsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultaEmpresaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsultaEmpresaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CronogramaSolicitudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CronogramaSolicitudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioInscripcionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioInscripcionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoliticaPrivacidadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoliticaPrivacidadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolicitudesPersonasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolicitudesPersonasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TerminosYCondicionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerminosYCondicionesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-6e98c58b8fba7df1fe47de94e83fb1b16b8dd722608484928c77f5579c69682988f9933dff55aaf1f86546d29e6d08fac2ceead605dc2b73cd6fb7c09a09722b"' : 'data-target="#xs-components-links-module-ComponentsModule-6e98c58b8fba7df1fe47de94e83fb1b16b8dd722608484928c77f5579c69682988f9933dff55aaf1f86546d29e6d08fac2ceead605dc2b73cd6fb7c09a09722b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-6e98c58b8fba7df1fe47de94e83fb1b16b8dd722608484928c77f5579c69682988f9933dff55aaf1f86546d29e6d08fac2ceead605dc2b73cd6fb7c09a09722b"' :
                                            'id="xs-components-links-module-ComponentsModule-6e98c58b8fba7df1fe47de94e83fb1b16b8dd722608484928c77f5579c69682988f9933dff55aaf1f86546d29e6d08fac2ceead605dc2b73cd6fb7c09a09722b"' }>
                                            <li class="link">
                                                <a href="components/ButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocentesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocentesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpresasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioDocenteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioDocenteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioEmpresaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioEmpresaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioInscritosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioInscritosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioJornadasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioJornadasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JornadasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JornadasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgbdAlertBasicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgbdAlertBasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgbdDropdownBasicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgbdDropdownBasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgbdnavBasicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgbdnavBasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgbdpaginationBasicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgbdpaginationBasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolicitudesEmpresasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolicitudesEmpresasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-e9688fb3d1dcb94eadb516709b45be0c788d3b97d5470396f3f2df604a42fbd60635ebc59b780440bd35176fd4a58c4784ecf48bff4e64260dc05999a20986f7"' : 'data-target="#xs-components-links-module-DashboardModule-e9688fb3d1dcb94eadb516709b45be0c788d3b97d5470396f3f2df604a42fbd60635ebc59b780440bd35176fd4a58c4784ecf48bff4e64260dc05999a20986f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-e9688fb3d1dcb94eadb516709b45be0c788d3b97d5470396f3f2df604a42fbd60635ebc59b780440bd35176fd4a58c4784ecf48bff4e64260dc05999a20986f7"' :
                                            'id="xs-components-links-module-DashboardModule-e9688fb3d1dcb94eadb516709b45be0c788d3b97d5470396f3f2df604a42fbd60635ebc59b780440bd35176fd4a58c4784ecf48bff4e64260dc05999a20986f7"' }>
                                            <li class="link">
                                                <a href="components/BlogCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesRatioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalesRatioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopSellingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopSellingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AboutComponent.html" data-type="entity-link" >AboutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BadgeComponent.html" data-type="entity-link" >BadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JornadasComponent-1.html" data-type="entity-link" >JornadasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent-1.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppHelpersService.html" data-type="entity-link" >AppHelpersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthHelpersService.html" data-type="entity-link" >AuthHelpersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatalogosService.html" data-type="entity-link" >CatalogosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriasService.html" data-type="entity-link" >CategoriasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocentesService.html" data-type="entity-link" >DocentesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresasService.html" data-type="entity-link" >EmpresasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientService.html" data-type="entity-link" >HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InscripcionesJornadasService.html" data-type="entity-link" >InscripcionesJornadasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JornadasService.html" data-type="entity-link" >JornadasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlacesService.html" data-type="entity-link" >PlacesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SolicitudesEmpresasService.html" data-type="entity-link" >SolicitudesEmpresasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link" >SpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypesIdentificationService.html" data-type="entity-link" >TypesIdentificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValoresCatalogosService.html" data-type="entity-link" >ValoresCatalogosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VerticalSidebarService.html" data-type="entity-link" >VerticalSidebarService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/blogcard.html" data-type="entity-link" >blogcard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feed.html" data-type="entity-link" >Feed</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAlert.html" data-type="entity-link" >IAlert</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product-1.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link" >RouteInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableRows.html" data-type="entity-link" >TableRows</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/topcard.html" data-type="entity-link" >topcard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});