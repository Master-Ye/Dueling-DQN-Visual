const average_reward = [[1, '5.0'], [2, '0.0'], [3, '2.0'], [4, '3.0'], [5, '18.0'], [6, '16.0'], [7, '16.0'], [8, '15.0'], [9, '22.0'], [10, '19.0'], [11, '21.0'], [12, '31.0'], [13, '22.0'], [14, '48.0'], [15, '44.0'], [16, '26.0'], [17, '23.0'], [18, '41.0'], [19, '35.0'], [20, '85.0'], [21, '60.0'], [22, '49.0'], [23, '45.0'], [24, '51.0'], [25, '43.0'], [26, '81.0'], [27, '69.0'], [28, '71.0'], [29, '56.0'], [30, '80.0'], [31, '72.0'], [32, '137.0'], [33, '82.0'], [34, '73.0'], [35, '192.0'], [36, '164.0'], [37, '50.0'], [38, '363.0'], [39, '163.0'], [40, '176.0'], [41, '229.0'], [42, '286.0'], [43, '92.0'], [44, '173.0'], [45, '263.0'], [46, '130.0'], [47, '170.0'], [48, '201.0'], [49, '137.0'], [50, '242.0'], [51, '206.0'], [52, '175.0'], [53, '324.0'], [54, '102.0'], [55, '183.0'], [56, '250.0'], [57, '250.0'], [58, '398.0'], [59, '233.0'], [60, '139.0'], [61, '236.0'], [62, '241.0'], [63, '195.0'], [64, '174.0'], [65, '172.0'], [66, '206.0'], [67, '238.0'], [68, '132.0'], [69, '248.0'], [70, '364.0'], [71, '227.0'], [72, '277.0'], [73, '261.0'], [74, '219.0'], [75, '283.0'], [76, '235.0'], [77, '235.0'], [78, '157.0'], [79, '132.0'], [80, '375.0'], [81, '66.0'], [82, '342.0'], [83, '352.0'], [84, '330.0'], [85, '272.0'], [86, '204.0'], [87, '301.0'], [88, '337.0'], [89, '298.0'],[90,'339.0'],[91,'324.0'],[92,'279.0'],[93,'268.0'],[94,'390.0'],[95,'384.0'],[96,'286.0'],[97,'300.0'],[98,'423.0'],[99,'21.0'],[100,'293.0']]
const nr_games =[[1, '54.8'], [2, '72.4'], [3, '71.4'], [4, '93.6'], [5, '32.6'], [6, '38.6'], [7, '41.4'], [8, '45.2'], [9, '30.2'], [10, '25.4'], [11, '30.2'], [12, '27.0'], [13, '26.4'], [14, '16.2'], [15, '21.2'], [16, '0.0'], [17, '0.0'], [18, '0.0'], [19, '0.0'], [20, '0.2'], [21, '16.0'], [22, '18.2'], [23, '18.8'], [24, '15.2'], [25, '21.8'], [26, '14.8'], [27, '13.2'], [28, '11.0'], [29, '16.0'], [30, '16.6'], [31, '17.6'], [32, '14.4'], [33, '17.2'], [34, '13.6'], [35, '17.2'], [36, '13.0'], [37, '17.2'], [38, '11.8'], [39, '14.4'], [40, '12.4'], [41, '13.2'], [42, '16.2'], [43, '12.8'], [44, '12.6'], [45, '11.4'], [46, '12.2'], [47, '12.0'], [48, '15.0'], [49, '15.0'], [50, '20.2'], [51, '17.6'], [52, '15.4'], [53, '14.8'], [54, '14.6'], [55, '23.6'], [56, '14.0'], [57, '12.8'], [58, '13.0'], [59, '11.0'], [60, '10.8'], [61, '13.0'], [62, '13.2'], [63, '15.6'], [64, '13.6'], [65, '14.6'], [66, '24.6'], [67, '18.2'], [68, '27.8'], [69, '14.8'], [70, '13.2'], [71, '0.0'], [72, '0.0'], [73, '0.0'], [74, '0.0'], [75, '0.4'], [76, '24.8'], [77, '16.0'], [78, '15.8'], [79, '15.4'], [80, '3.6'], [81, '0.0'], [82, '0.0'], [83, '0.0']] //20000步
const loss =[[1, '0.0036815390922129154'], [2, '0.0008036940125748515'], [3, '0.001631807186640799'], [4, '0.0034996666945517063'], [5, '0.007588602602481842'], [6, '0.005792398937046528'], [7, '0.0021362933330237865'], [8, '0.006444535218179226'], [9, '0.015894312411546707'], [10, '0.010506896302103996'], [11, '0.011414331384003162'], [12, '0.011432372964918613'], [13, '0.004915871657431126'], [14, '0.007203280925750732'], [15, '0.00902638491243124'], [16, '0.009407528676092625'], [17, '0.007711153011769056'], [18, '0.01868472807109356'], [19, '0.02104988321661949'], [20, '0.010200543329119682'], [21, '0.02194288745522499'], [22, '0.015670742839574814'], [23, '0.009407132863998413'], [24, '0.016954153776168823'], [25, '0.039676740765571594'], [26, '0.05622166022658348'], [27, '0.03308045119047165'], [28, '0.05107957869768143'], [29, '0.0909719243645668'], [30, '0.023210246115922928'], [31, '0.016329798847436905'], [32, '0.04069340229034424'], [33, '0.043258197605609894'], [34, '0.09461421519517899'], [35, '0.04897984117269516'], [36, '0.1481814831495285'], [37, '0.11991852521896362'], [38, '0.013997728936374187'], [39, '0.119790218770504'], [40, '0.03726363927125931'], [41, '0.06204712763428688'], [42, '0.042543500661849976'], [43, '0.10998883843421936'], [44, '0.11319910734891891'], [45, '0.07821308076381683'], [46, '0.06784030795097351'], [47, '0.1432708501815796'], [48, '0.2226894050836563'], [49, '0.06944184750318527'], [50, '0.052403032779693604'], [51, '0.1699100136756897'], [52, '0.05235600471496582'], [53, '0.0905366837978363'], [54, '0.15882508456707'], [55, '0.18560582399368286'], [56, '0.06283672153949738'], [57, '0.11629019677639008'], [58, '0.045125920325517654'], [59, '0.04283517599105835'], [60, '0.2361689656972885'], [61, '0.08430390059947968'], [62, '0.07288272678852081'], [63, '0.16712091863155365'], [64, '0.06385589390993118'], [65, '0.1823655366897583'], [66, '0.20694002509117126'], [67, '0.22804799675941467'], [68, '0.37825286388397217'], [69, '0.09962016344070435'], [70, '0.2870712876319885'], [71, '0.14189675450325012'], [72, '0.19201570749282837'], [73, '0.13758115470409393'], [74, '0.46241551637649536'], [75, '0.07702037692070007'], [76, '0.2363101989030838'], [77, '0.06533929705619812'], [78, '0.4819754958152771'], [79, '0.14291109144687653'], [80, '0.2565266788005829'], [81, '0.14743134379386902'], [82, '0.3107503056526184'], [83, '0.31739121675491333'], [84, '0.2525746524333954'], [85, '0.23146530985832214'], [86, '0.29193639755249023'], [87, '0.47763189673423767'], [88, '0.3118560016155243'], [89, '0.399206280708313'], [90, '0.16939985752105713'], [91, '0.2562265992164612'], [92, '0.6170069575309753'], [93, '0.518537700176239'], [94, '0.5432088971138'], [95, '0.4294818937778473'], [96, '1.2435716390609741'], [97, '0.5280805230140686'], [98, '0.21956169605255127'], [99, '0.3320614993572235']]
export { average_reward, nr_games, loss };