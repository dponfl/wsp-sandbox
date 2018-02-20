(function () {
  'use strict';

  angular
    .module('Cameldrive')
    .controller('CarCtrl', CarCtrl);

  CarCtrl.$inject = ['GeneralConfigService', 'lodash', '$log'];

  /* @ngInject */
  function CarCtrl(GeneralConfigService, lodash, $log) {
    var vm = this;
    vm.title = 'CarCtrl';

    vm.panelGroups = [];
    vm.innerGroup = [];
    vm.panels = [];
    vm.highlights = [];

    vm.activateDetails = _activateDetails;
    vm.deactivateDetails = _deactivateDetails;

    this.$onInit = function () {
       $log.info('$onInit...');
      activate();
    };


    ////////////////

    function activate() {

      vm.highlights = [
/*
        {
          header: 'Some header 1',
          content: 'Message 1'
        },
*/
/*
        {
          header: 'Some header 2',
          content: 'Message sfsfdkl ljsflsjdfl lkfjsldfjsdlf lsdlsdfjlsdf lkslfdflsdj jsdlfkjsdf'
        },
*/
      ];

      vm.panels = [
        {
          showTag: true,
          tag: 'badge-hit',
          tagText: 'Bestseller',
          show: true,
          img: {
            href: '../../img/GA001.jpg',
            dataLightbox: 'A001',
            dataTitle: '',
            src: '../../img/GA001.jpg',
            alt: 'Image_Car_A001',
          },
          group: 'A',
          title: 'Mazda Demio 1350cc',
          time_group_1_h: '70',
          time_group_2_h: '45',
          time_group_3_h: '35',
          time_group_4_h: '30',
          time_group_5_h: '25',
          time_group_1_l: '50',
          time_group_2_l: '40',
          time_group_3_l: '25',
          time_group_4_l: '20',
          time_group_5_l: '15',
          content: [
            [
              {
                key: 'transmission',
                label: 'Transmission:',
                text: 'Автомат',
              },
              {
                key: 'capacity',
                label: 'Capacity:',
                text: '4_1',
              },
            ],
            [],
          ],
          contentObj: {
            transmission: {
              key: 'transmission',
              label: 'Transmission:',
              text: 'Автомат',
            },
            capacity: {
              key: 'capacity',
              label: 'Capacity:',
              text: '4_1',
            },
            climat: {
              key: 'climat',
              label: 'Capacity:',
              text: 'A/C',
            },
          },
          priceFrom: '15',
          showDetails: false,
        },
        {
          showTag: false,
          tag: 'badge-hit',
          tagText: 'Bestseller',
          show: true,
          img: {
            href: '../../img/GB001.jpg',
            dataLightbox: 'B001',
            dataTitle: '',
            src: '../../img/GB001.jpg',
            alt: 'Image_Car_B001',
          },
          group: 'B',
          title: 'Suzuki Swift 1250cc',
          time_group_1_h: '75',
          time_group_2_h: '50',
          time_group_3_h: '40',
          time_group_4_h: '35',
          time_group_5_h: '30',
          time_group_1_l: '55',
          time_group_2_l: '40',
          time_group_3_l: '25',
          time_group_4_l: '20',
          time_group_5_l: '15',
          content: [
            [
              {
                key: 'transmission',
                label: 'Transmission:',
                text: 'Автомат',
              },
              {
                key: 'capacity',
                label: 'Capacity:',
                text: '5_0',
              },
            ],
            [],
          ],
          contentObj: {
            transmission: {
              key: 'transmission',
              label: 'Transmission:',
              text: 'Автомат',
            },
            capacity: {
              key: 'capacity',
              label: 'Capacity:',
              text: '5_0',
            },
            climat: {
              key: 'climat',
              label: 'Capacity:',
              text: 'A/C',
            },
          },
          priceFrom: '15',
          showDetails: false,
        },
        {
          showTag: false,
          tag: 'badge-hit',
          tagText: 'Bestseller',
          show: true,
          img: {
            href: '../../img/GC001.jpg',
            dataLightbox: 'C001',
            dataTitle: '',
            src: '../../img/GC001.jpg',
            alt: 'Image_Car_C001',
          },
          group: 'C',
          title: 'VW Polo 1200cc',
          time_group_1_h: '80',
          time_group_2_h: '60',
          time_group_3_h: '45',
          time_group_4_h: '40',
          time_group_5_h: '35',
          time_group_1_l: '60',
          time_group_2_l: '40',
          time_group_3_l: '30',
          time_group_4_l: '25',
          time_group_5_l: '20',
          content: [
            [
              {
                key: 'transmission',
                label: 'Transmission:',
                text: 'Автомат',
              },
              {
                key: 'capacity',
                label: 'Capacity:',
                text: '5_0',
              },
            ],
            [],
          ],
          contentObj: {
            transmission: {
              key: 'transmission',
              label: 'Transmission:',
              text: 'Автомат',
            },
            capacity: {
              key: 'capacity',
              label: 'Capacity:',
              text: '5_0',
            },
            climat: {
              key: 'climat',
              label: 'Capacity:',
              text: 'A/C',
            },
          },
          priceFrom: '20',
          showDetails: false,
        },
        {
          showTag: false,
          tag: 'badge-hit',
          tagText: 'Bestseller',
          show: true,
          img: {
            href: '../../img/GD001.jpg',
            dataLightbox: 'D001',
            dataTitle: '',
            src: '../../img/GD001.jpg',
            alt: 'Image_Car_D001',
          },
          group: 'D',
          title: 'Nissan Juke 1600cc',
          time_group_1_h: '80',
          time_group_2_h: '60',
          time_group_3_h: '45',
          time_group_4_h: '40',
          time_group_5_h: '35',
          time_group_1_l: '60',
          time_group_2_l: '40',
          time_group_3_l: '30',
          time_group_4_l: '25',
          time_group_5_l: '20',
          content: [
            [
              {
                key: 'transmission',
                label: 'Transmission:',
                text: 'Автомат',
              },
              {
                key: 'capacity',
                label: 'Capacity:',
                text: '5_0',
              },
            ],
            [],
          ],
          contentObj: {
            transmission: {
              key: 'transmission',
              label: 'Transmission:',
              text: 'Автомат',
            },
            capacity: {
              key: 'capacity',
              label: 'Capacity:',
              text: '5_0',
            },
            climat: {
              key: 'climat',
              label: 'Capacity:',
              text: 'A/C',
            },
          },
          priceFrom: '20',
          showDetails: false,
        },
        {
          showTag: false,
          tag: 'badge-hit',
          tagText: 'Bestseller',
          show: true,
          img: {
            href: '../../img/GE001.jpg',
            dataLightbox: 'E001',
            dataTitle: '',
            src: '../../img/GE001.jpg',
            alt: 'Image_Car_E001',
          },
          group: 'E',
          title: 'Nissan Qashqai 1200cc',
          time_group_1_h: '80',
          time_group_2_h: '60',
          time_group_3_h: '45',
          time_group_4_h: '40',
          time_group_5_h: '35',
          time_group_1_l: '60',
          time_group_2_l: '40',
          time_group_3_l: '30',
          time_group_4_l: '25',
          time_group_5_l: '20',
          content: [
            [
              {
                key: 'transmission',
                label: 'Transmission:',
                text: 'Автомат',
              },
              {
                key: 'capacity',
                label: 'Capacity:',
                text: '5_0',
              },
            ],
            [],
          ],
          contentObj: {
            transmission: {
              key: 'transmission',
              label: 'Transmission:',
              text: 'Автомат',
            },
            capacity: {
              key: 'capacity',
              label: 'Capacity:',
              text: '5_0',
            },
            climat: {
              key: 'climat',
              label: 'Capacity:',
              text: 'A/C',
            },
          },
          priceFrom: '20',
          showDetails: false,
        },
        {
          showTag: false,
          tag: 'badge-hit',
          tagText: 'Bestseller',
          show: true,
          img: {
            href: '../../img/GF001.jpg',
            dataLightbox: 'F001',
            dataTitle: '',
            src: '../../img/GF001.jpg',
            alt: 'Image_Car_F001',
          },
          group: 'F',
          title: 'Nissan NV200 1600cc',
          time_group_1_h: '80',
          time_group_2_h: '60',
          time_group_3_h: '45',
          time_group_4_h: '40',
          time_group_5_h: '35',
          time_group_1_l: '60',
          time_group_2_l: '40',
          time_group_3_l: '30',
          time_group_4_l: '25',
          time_group_5_l: '20',
          content: [
            [
              {
                key: 'transmission',
                label: 'Transmission:',
                text: 'Автомат',
              },
              {
                key: 'capacity',
                label: 'Capacity:',
                text: '5_0',
              },
            ],
            [],
          ],
          contentObj: {
            transmission: {
              key: 'transmission',
              label: 'Transmission:',
              text: 'Автомат',
            },
            capacity: {
              key: 'capacity',
              label: 'Capacity:',
              text: '5_0',
            },
            climat: {
              key: 'climat',
              label: 'Capacity:',
              text: 'A/C',
            },
          },
          priceFrom: '20',
          showDetails: false,
        },
      ];

      _buildPanelGroups();
    } // activate

    function _activateDetails(elemInd) {
      vm.panels[elemInd].showDetails = true;
    } // activateDetails

    function _deactivateDetails(elemInd) {
      vm.panels[elemInd].showDetails = false;
    } // deactivateDetails

    function _buildPanelGroups () {
      vm.panelGroups = [];
      vm.innerGroup = [];

      for (var i = 1; i < vm.panels.length+1; i++) {
        vm.panels[i-1].ind = i-1;
        vm.innerGroup.push(vm.panels[i-1]);
        if (i % 3 == 0) {
          vm.panelGroups.push(vm.innerGroup);
          vm.innerGroup = [];
        }
      }
      if (vm.innerGroup.length != 0) vm.panelGroups.push(vm.innerGroup);
    } // buildPanelGroups


  }

})();

