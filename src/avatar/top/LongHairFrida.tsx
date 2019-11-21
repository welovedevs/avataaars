import * as React from 'react'
import uniqueId from 'lodash/uniqueId'

import FacialHair from './facialHair'

export default class LongHairFrida extends React.Component {
  static optionValue = 'LongHairFrida'
  private filter1 = uniqueId('react-filter-')
  private filter2 = uniqueId('react-filter-')
  private filter3 = uniqueId('react-filter-')
  private filter4 = uniqueId('react-filter-')
  private filter5 = uniqueId('react-filter-')
  private filter6 = uniqueId('react-filter-')
  private filter7 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const {
      filter1,
      filter2,
      filter3,
      filter4,
      filter5,
      filter6,
      filter7,
      mask1,
      path1,
      path2
    } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path2} x='0' y='0' width='264' height='280' />
          <filter
            x='-3.8%'
            y='-6.7%'
            width='107.7%'
            height='126.7%'
            filterUnits='objectBoundingBox'
            id={filter5}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-6.7%'
            y='-3.4%'
            width='113.3%'
            height='113.8%'
            filterUnits='objectBoundingBox'
            id={filter6}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-6.7%'
            y='-3.4%'
            width='113.3%'
            height='113.8%'
            filterUnits='objectBoundingBox'
            id={filter7}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-3.8%'
            y='-3.8%'
            width='107.7%'
            height='115.4%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-2.5%'
            y='-2.5%'
            width='105.0%'
            height='110.0%'
            filterUnits='objectBoundingBox'
            id={filter2}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-2.7%'
            y='-2.7%'
            width='105.4%'
            height='110.8%'
            filterUnits='objectBoundingBox'
            id={filter3}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-1.8%'
            y='-1.9%'
            width='103.6%'
            height='107.4%'
            filterUnits='objectBoundingBox'
            id={filter4}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path2} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Frida' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Cabello'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(57.000000, 12.000000)'>
              <path
                d='M132,85.9365741 L132,86.1659169 C137.155374,87.0308248 141.196116,91.1828748 141.893354,96.3931952 C144.449672,93.4871212 146,89.6746099 146,85.5 C146,83.370043 145.596416,81.3343479 144.861548,79.4652142 C148.026608,76.4588698 150,72.2098901 150,67.5 C150,61.6639649 146.970105,56.5355997 142.397534,53.6021248 C143.424844,51.4510861 144,49.0427105 144,46.5 C144,38.865183 138.814518,32.4415002 131.77335,30.5587463 C131.922635,29.560863 132,28.5394662 132,27.5 C132,16.1781626 122.821837,7 111.5,7 C108.870853,7 106.357304,7.49493913 104.047446,8.3967274 C100.317449,3.30576666 94.2947759,0 87.5,0 C83.2377504,0 79.2793114,1.30076749 76,3.52698535 C72.7206886,1.30076749 68.7622496,0 64.5,0 C57.7052241,0 51.6825514,3.30576666 47.9525545,8.3967274 C45.6426956,7.49493913 43.1291474,7 40.5,7 C29.1781626,7 20,16.1781626 20,27.5 C20,28.5394662 20.0773647,29.560863 20.2266501,30.5587463 C13.1854816,32.4415002 8,38.865183 8,46.5 C8,48.6917361 8.4273349,50.7836628 9.20323008,52.6970055 C3.75045759,55.3899422 0,61.0069879 0,67.5 C0,72.9379417 2.63063706,77.7614652 6.68874609,80.7674054 C6.2406808,82.2665254 6,83.8551557 6,85.5 C6,89.6746099 7.55032816,93.4871212 10.1066457,96.3931952 C10.8038839,91.1828748 14.8446259,87.0308248 20,86.1659169 L20,85.9365741 C20.0276665,85.957925 20.0554443,85.9790669 20.0833333,86 C22.985911,38.8525302 68.5527463,55.7423492 76.000002,29.3361688 C83.4472619,55.7423461 129.014089,38.8525344 131.916667,86 C131.944556,85.9790669 131.972333,85.957925 132,85.9365741 Z M52,168.610951 L52,172.811832 C51.1847358,172.935746 50.3498715,173 49.5,173 C42.6790709,173 36.8248202,168.861157 34.3116389,162.957863 C25.7536314,162.348807 19,155.213101 19,146.5 C19,145.029028 19.1924867,143.603013 19.5536459,142.245771 C12.8575367,140.144362 8,133.88945 8,126.5 C8,122.755519 9.24731211,119.302363 11.3491137,116.533355 C13.0865598,119.870864 16.346706,122.289132 20.2085808,122.867187 C21.9518066,143.114792 34.4692178,160.282984 52,168.610951 Z M100,168.610951 L100,172.811832 C100.815264,172.935746 101.650128,173 102.5,173 C109.320929,173 115.17518,168.861157 117.688361,162.957863 C126.246369,162.348807 133,155.213101 133,146.5 C133,145.029028 132.807513,143.603013 132.446354,142.245771 C139.142463,140.144362 144,133.88945 144,126.5 C144,122.755519 142.752688,119.302363 140.650886,116.533355 C138.91344,119.870864 135.653294,122.289132 131.791419,122.867187 C130.048193,143.114792 117.530782,160.282984 100,168.610951 Z'
                fill='#1F3540'
              />
            </g>
            <g
              id='Ornamentos'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(67.000000, 0.000000)'>
              <g
                id='hoja'
                filter={`url(#${filter5})`}
                opacity='0.899999976'
                transform='translate(120.000000, 64.500000) scale(1, -1) rotate(-20.000000) translate(-120.000000, -64.500000) translate(107.000000, 57.000000)'
                fillRule='nonzero'>
                <path
                  d='M3.61111111,10 C3.61111111,10 1.95,0 13,0 C20.2222222,0 25.2777778,5.71428571 25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C5.05555556,14.2857143 3.61111111,10 3.61111111,10 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C7.22222222,14.2857143 5.12777778,12.3571429 4.18888889,11.0714286 C2.09444444,12.8571429 1.37222222,14.5 1.37222222,14.5714286 C1.3,14.8571429 1.01111111,15 0.722222222,15 C0.65,15 0.505555556,15 0.433333333,14.9285714 C0.0722222222,14.7857143 -0.0722222222,14.3571429 0.0722222222,14 C0.144444444,13.7857143 1.95,9.85714286 7.43888889,7.28571429 C15.3833333,3.14285714 25.2777778,5.71428571 25.2777778,5.71428571 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='hoja'
                filter={`url(#${filter6})`}
                transform='translate(93.307368, 21.745191) scale(-1, -1) rotate(-120.000000) translate(-93.307368, -21.745191) translate(85.807368, 7.245191)'>
                <path
                  d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='hoja'
                filter={`url(#${filter7})`}
                transform='translate(29.307368, 59.745191) rotate(-120.000000) translate(-29.307368, -59.745191) translate(21.807368, 45.245191)'>
                <path
                  d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='Flor'
                filter={`url(#${filter1})`}
                transform='translate(13.000000, 42.000000) scale(-1, 1) translate(-13.000000, -42.000000) translate(0.000000, 29.000000)'>
                <path
                  d='M24.4244753,20.9561089 C25.2601813,19.8468762 25.6139026,18.4784184 25.4208747,17.1027473 C25.2278468,15.7270762 24.5099609,14.5094298 23.401533,13.6738657 C23.1024018,13.448127 22.7077101,13.2632031 22.2596302,13.1057873 C22.7130645,12.9646232 23.1137179,12.7934099 23.4204085,12.5786628 C25.7688628,10.9342574 26.3421384,7.68540233 24.6974016,5.33647474 C23.0526648,2.98754715 19.8036678,2.41507618 17.4552135,4.05948158 C17.148523,4.2742286 16.8506035,4.59216121 16.5623958,4.97030055 C16.5681989,4.4950724 16.5289465,4.06126726 16.4191304,3.70296871 C16.0132035,2.3748027 15.1137169,1.2836091 13.8873598,0.632188307 C12.6611446,-0.0200371698 11.2540931,-0.154883395 9.92559572,0.250570203 C7.18364131,1.0892266 5.6350141,4.00181908 6.47286581,6.7436316 C6.58216096,7.10017888 6.78669399,7.47891226 7.05541252,7.86771872 C6.6074755,7.71655089 6.18638481,7.62487741 5.81372806,7.61849197 C2.94678437,7.56848119 0.573854142,9.85989025 0.523370073,12.7271653 C0.504358584,13.8654889 0.853022045,14.9255192 1.46080913,15.7935291 C2.38423063,17.1113044 3.90375474,17.9869973 5.63218533,18.0167186 C6.00484208,18.0231041 6.42832327,17.945939 6.88109576,17.8108811 C6.59932552,18.1901555 6.38197496,18.5617056 6.2605192,18.9140724 C5.69762142,20.5489044 5.99965968,22.2756795 6.92293929,23.5942594 C7.53072638,24.4622693 8.40824188,25.1534041 9.48422896,25.5235908 C12.1953795,26.4571485 15.1603315,25.0102268 16.0934159,22.2994077 C16.2148717,21.947041 16.272275,21.5203224 16.2839005,21.0473654 C16.5573519,21.4328579 16.8436218,21.7550638 17.1409542,21.9792407 C18.2505182,22.81542 19.6186447,23.168668 20.9943157,22.9756401 C22.3707915,22.7827541 23.5887693,22.0653415 24.4244753,20.9561089 Z'
                  fill='#4ACAD3'
                  fillRule='nonzero'
                />
                <path
                  d='M11.178297,8.63990176 C10.9452631,7.87696713 11.3743225,7.06939957 12.1372572,6.83636565 C12.9001918,6.60333173 13.7077594,7.03239119 13.9407933,7.79532582 C14.1738272,8.55826044 13.7087793,11.9767907 13.7087793,11.9767907 C13.7087793,11.9767907 11.4113309,9.40283638 11.178297,8.63990176 Z M8.9355486,14.4373723 C8.1377895,14.4232361 7.50243635,13.7656743 7.5165726,12.9679152 C7.53070884,12.1701561 8.18827062,11.534803 8.98602972,11.5489392 C9.78378882,11.5630754 12.8914353,13.0618808 12.8914353,13.0618808 C12.8914353,13.0618808 9.73297629,14.4510353 8.9355486,14.4373723 Z M14.9931854,12.4189898 C14.9931854,12.4189898 16.7313261,9.4385895 17.3849366,8.98092648 C18.0385471,8.52326347 18.9389925,8.68203629 19.3966555,9.33564681 C19.8543185,9.98925733 19.6955457,10.8897027 19.0419352,11.3473657 C18.3883247,11.8050287 14.9931854,12.4189898 14.9931854,12.4189898 Z M11.9202121,19.2569641 C11.1657288,18.9973982 10.7651265,18.1754621 11.0246924,17.4209789 C11.2842584,16.6664957 13.670556,14.1745805 13.670556,14.1745805 C13.670556,14.1745805 14.0160946,17.6074345 13.7565287,18.3619178 C13.4966313,19.1159277 12.6746953,19.5165301 11.9202121,19.2569641 Z M17.2395979,17.2963365 C16.6023761,16.8164172 14.9694239,13.7771777 14.9694239,13.7771777 C14.9694239,13.7771777 18.3408473,14.5093818 18.978069,14.9893011 C19.6152908,15.4692204 19.7426018,16.3753059 19.2623511,17.0120544 C18.7824319,17.6492761 17.8763463,17.7765872 17.2395979,17.2963365 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter={`url(#${filter2})`}
                transform='translate(20.000000, 16.000000)'>
                <path
                  d='M30.5258511,33.0981022 L30.7843694,30.7838831 L33.0980227,30.5247992 C35.9451175,30.2051869 38.2084249,28.4080043 39.1519882,25.7142103 C40.2177395,22.6719541 39.217042,19.3553405 36.6052724,17.4325757 L34.7311566,16.052869 L35.6634061,13.9191036 C36.8915092,11.1127382 36.3082875,8.02353005 34.142278,5.85752056 C31.9762685,3.69151107 28.8870604,3.10828939 26.0801294,4.33582677 L23.9469296,5.26864203 L22.5666572,3.39396053 C20.6438924,0.78558504 17.3267131,-0.217940904 14.2844569,0.847810436 C11.5917943,1.79137373 9.79348029,4.05468111 9.4749994,6.90177585 L9.21591547,9.21542924 L6.90226208,9.47451317 C4.05460165,9.79355975 1.79129427,11.5918737 0.847730981,14.2845363 C-0.0896097682,16.9607941 0.549614762,19.8457897 2.51650298,21.812678 L2.51706867,21.8132437 C2.78576925,22.0819442 3.08049135,22.3348056 3.39388108,22.5656053 L5.26856258,23.9458777 L4.33518163,26.0796431 C3.10877562,28.8865742 3.6919973,31.9757823 5.85800679,34.1417918 C8.02401628,36.3078013 11.1132244,36.891023 13.9201555,35.664617 L16.0539209,34.731236 L17.4341933,36.6059175 C19.3513012,39.2165558 22.6741374,40.217819 25.7169593,39.1526333 C28.4096219,38.2079386 30.2073702,35.9451969 30.5258511,33.0981022 Z'
                  fill='#FDB599'
                  fillRule='nonzero'
                />
                <path
                  d='M22.8816016,25.1907295 C23.087511,25.9589303 22.6315686,26.7486271 21.8633678,26.9545366 C21.095167,27.1604461 20.3049044,26.703938 20.0995606,25.9363028 C19.8942168,25.1686677 20,20 20,20 C20,20 17.50759,24.5288775 16.9452987,25.0911688 C16.3835731,25.6528945 15.4711225,25.6534601 14.9088312,25.0911688 C14.3465399,24.5288775 14.3471055,23.6164269 14.9088312,23.0547013 C15.4711225,22.49241 20,20 20,20 C20,20 14.831898,20.1063489 14.0636972,19.9004394 C13.2954963,19.6945299 12.8395539,18.904833 13.0454634,18.1366322 C13.2513729,17.3684314 14.0410697,16.912489 14.8092705,17.1183984 C15.5774713,17.3243079 20,20 20,20 C20,20 17.3243079,15.5774713 17.1183984,14.8092705 C16.912489,14.0410697 17.3684314,13.2513729 18.1366322,13.0454634 C18.904833,12.8395539 19.6945299,13.2954963 19.9004394,14.0636972 C20.1063489,14.831898 20,20 20,20 C20,20 22.49241,15.4711225 23.0547013,14.9088312 C23.6169926,14.3465399 24.5288775,14.3465399 25.0911688,14.9088312 C25.6534601,15.4711225 25.6534601,16.3830074 25.0911688,16.9452987 C24.5288775,17.50759 20,20 20,20 C20,20 25.1686677,19.8942168 25.9363028,20.0995606 C26.703938,20.3049044 27.1604461,21.095167 26.9545366,21.8633678 C26.7486271,22.6315686 25.9589303,23.087511 25.1907295,22.8816016 C24.4225287,22.6756921 20,20 20,20 C20,20 22.6751264,24.421963 22.8816016,25.1907295 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter={`url(#${filter3})`}
                transform='translate(89.000000, 26.000000)'>
                <path
                  d='M34.7579072,29.8221549 C35.9471811,28.2436316 36.4505537,26.2962107 36.1758602,24.338525 C35.9011667,22.3808393 34.8795597,20.6480348 33.3021815,19.4589627 C32.8764948,19.1377192 32.3148182,18.8745582 31.6771661,18.6505434 C32.322438,18.4496561 32.8925986,18.2060063 33.3290428,17.9004048 C36.6710739,15.5602894 37.4868893,10.9369187 35.1463023,7.59421406 C32.8057153,4.25150941 28.1821427,3.43683918 24.8401115,5.77695456 C24.4036673,6.08255608 23.979705,6.53499864 23.5695632,7.07312001 C23.5778216,6.3968338 23.5219623,5.77949571 23.3656856,5.26960932 C22.7880204,3.37952692 21.5079818,1.82667448 19.7627813,0.899652591 C18.0177827,-0.0285144339 16.0154402,-0.220410986 14.1248862,0.356580673 C10.2228742,1.55005325 8.01905852,5.69489638 9.21138596,9.59670651 C9.36692136,10.1041007 9.6579876,10.6430675 10.0403947,11.196369 C9.40294591,10.9812455 8.80370145,10.8507871 8.27338223,10.8417001 C4.19350083,10.7705309 0.816638586,14.0313823 0.744795872,18.1117353 C0.717741062,19.7316573 1.21391599,21.2401619 2.07884376,22.4754068 C3.39294359,24.3507024 5.55534329,25.5968808 8.01503297,25.6391765 C8.54535219,25.6482635 9.14799849,25.5384516 9.79232859,25.3462538 C9.39134786,25.8859905 9.08204129,26.414735 8.9092004,26.9161799 C8.10815356,29.2426717 8.53797723,31.7000054 9.85187515,33.5764461 C10.7168029,34.811691 11.965575,35.7952289 13.4967874,36.322033 C17.3549631,37.6505575 21.5743179,35.5914767 22.9021688,31.7337725 C23.0750097,31.2323275 23.1566991,30.6250741 23.173243,29.95202 C23.5623854,30.5006054 23.9697696,30.9591293 24.3928963,31.2781502 C25.9718913,32.4680977 27.9188405,32.9707967 29.8765262,32.6961032 C31.8353571,32.4216117 33.5686332,31.4006783 34.7579072,29.8221549 Z'
                  fill='#F7D30C'
                  fillRule='nonzero'
                />
                <path
                  d='M15.9075765,12.2952448 C15.5759513,11.2095302 16.1865359,10.0602994 17.2722506,9.72867419 C18.3579653,9.397049 19.507196,10.0076336 19.8388212,11.0933483 C20.1704464,12.1790629 19.5086475,17.0438945 19.5086475,17.0438945 C19.5086475,17.0438945 16.2392017,13.3809595 15.9075765,12.2952448 Z M12.715973,20.5454914 C11.5807004,20.5253744 10.676544,19.5896134 10.696661,18.4543409 C10.716778,17.3190683 11.652539,16.4149119 12.7878115,16.4350289 C13.9230841,16.4551458 18.3455041,18.5880611 18.3455041,18.5880611 C18.3455041,18.5880611 13.850774,20.5649348 12.715973,20.5454914 Z M21.3364561,17.6731778 C21.3364561,17.6731778 23.8099641,13.4318389 24.7401021,12.7805492 C25.6702401,12.1292596 26.9516432,12.3552055 27.6029329,13.2853435 C28.2542225,14.2154816 28.0282766,15.4968846 27.0981386,16.1481743 C26.1680005,16.799464 21.3364561,17.6731778 21.3364561,17.6731778 Z M16.9633787,27.4041412 C15.889691,27.0347589 15.3196031,25.8650807 15.6889854,24.7913931 C16.0583677,23.7177054 19.4542528,20.1715184 19.4542528,20.1715184 C19.4542528,20.1715184 19.9459808,25.0567338 19.5765985,26.1304214 C19.2067446,27.2034356 18.0370664,27.7735236 16.9633787,27.4041412 Z M24.5332739,24.6140173 C23.6264583,23.9310553 21.3026416,19.6059836 21.3026416,19.6059836 C21.3026416,19.6059836 26.1004365,20.6479665 27.0072521,21.3309285 C27.9140676,22.0138905 28.095241,23.30332 27.4118074,24.209462 C26.7288453,25.1162776 25.4394159,25.297451 24.5332739,24.6140173 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter={`url(#${filter4})`}
                transform='translate(48.000000, 0.000000)'>
                <path
                  d='M54.1379237,31.5464048 C55.9625462,24.5630399 48.1438056,19.13187 45.1845324,17.3616591 C45.6989766,14.4276922 46.8574047,4.80065356 40.7169237,1.24584505 C34.6121663,-2.28828261 26.9236153,3.44959091 24.6013353,5.39402404 C24.4009276,5.26871855 24.1656352,5.12587117 23.8977086,4.97076479 C20.8314374,3.19565841 13.1300975,-0.380512394 7.84990403,4.73636964 C2.20473848,10.2044755 5.53732179,18.7392794 6.80518652,21.4340926 C4.64577053,23.4449497 -1.57937327,30.0260297 0.986877047,37.024011 C1.69277097,38.9530347 2.99822799,40.4795811 4.86875265,41.5624535 C8.89955964,43.8959428 14.4760657,43.5196765 16.591707,43.2691852 C17.5849083,45.1496134 20.4220029,49.9813784 24.4796026,52.3303784 C26.1496784,53.2972082 27.8550402,53.7431811 29.5502657,53.6552686 C36.4552712,53.2971895 39.4664791,43.6601819 40.2201879,40.7426742 C43.0812084,40.3465884 52.3062726,38.5442744 54.1379237,31.5464048 Z'
                  fill='#FF7398'
                  fillRule='nonzero'
                />
                <path
                  d='M27.7643057,25.6030632 C27.7643057,25.6030632 31.4492792,33.7908502 28.1176886,34.3138653 C24.7835165,34.8339614 26.6574825,25.7216143 26.6574825,25.7216143 C26.6574825,25.7216143 19.5457139,31.7290717 18.5074329,28.7503567 C17.4680864,25.7710249 26.208593,24.7024398 26.208593,24.7024398 C26.208593,24.7024398 18.2208741,20.0098596 20.8149072,17.8660564 C23.4089403,15.7222531 27.0309781,23.9576566 27.0309781,23.9576566 C27.0309781,23.9576566 28.975509,15.0385915 31.8514465,16.7035111 C34.727384,18.3684307 27.9942413,24.5153028 27.9942413,24.5153028 C27.9942413,24.5153028 36.8711392,23.5256765 36.3635103,26.8673556 C35.8586276,30.2092 27.7643057,25.6030632 27.7643057,25.6030632 Z'
                  fill='#FFFFFF'
                />
              </g>
            </g>
            <g
              id='Arete'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(182.000000, 129.000000)'>
              <rect
                id='Cadenita'
                fill='#E6E6E6'
                x='9'
                y='0'
                width='2'
                height='39'
                rx='1'
              />
              <polygon
                id='Rayo'
                fill='#9177FF'
                fillRule='nonzero'
                points='20 37 10.57 37 17 20 6 20 0 41 8.636 41 4 60'
              />
            </g>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
