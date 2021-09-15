var app = angular.module('myApp', []);
app.controller('FirstController', function($scope) {
    $scope.dataset =[{name : 'Hepatocytes',date:'21-04-2021',description:'Drug discovery, toxicity testing and research of liver-specific diseases are significantly hampered by the lack of a reliable long-term in vitro hepatocyte model. Current in vitro models of liver related diseases do not consider how topographical features used for cell culture can greatly impact  different aspects of cell behavior such as cell differentiation, proliferation and survival. In this work we propose the use of a custom designed polystyrene cell culture surface topography that does enable long-term cultivation of primary hepatocytes with maintenance of phenotypical stability and viability. Our results show that hepatocytes cultured on topographies can maintain the expression of hepatic genetic markers alongside a strongly enhanced protein production capacity, drug metabolism functionality and sensitivity to toxins compared to current in vitro liver models for up to 4 weeks. Our custom made topographic-featuring plates can be used easily  with existing standardized cell culture protocols representing an innovative and powerful tool for long-term in vitro studies using primary hepatocytes within routine high-throughput screenings and for more specific disease models including infection.',cellline:"Hepatocytes",leadauthor:'J. de Boer',leadpi:'J. de Boer',technology:'TopoChip',topochip:"Polystyrene TopoChip",staining:'Dapi (Nuclei), CD81 (Hepatocyte marker), Phalloidin (F-actin)',channels:'DAPI,FITC,TXred',chipreplicate:'10',selectedsurfaces:"1033,824,1213"}
                     ,{name : 'Adypocytes',date:'25-06-2018',cellline:"adypocytes",topochip:"Polystyrene TopoChip",chipreplicate:'10',description:'',leadauthor:'J. de Boer',leadpi:'J. de Boer',technology:'TopoChip',topochip:"Polystyrene TopoChip"}
                    ,{name: 'Phenome28',date:"01-01-2001",celline:"Human Stem Cells",topochip:"Polystyrene TopoChip",leadauthor:'A. Vasilevich',leadpi:'J. de Boer',technology:'TopoChip',topochip:"Polystyrene TopoChip",description:'We defined the phenotypic response of human bone marrow-derived mesenchymal stem cells (hMSCs) to 2176 randomly generated surface topographies by probing basic functions such as migration, proliferation, protein synthesis, apoptosis, and differentiation using quantitative image analysis. Clustering the surfaces into 28 archetypical cell shapes, we found a very strict correlation between cell shape and physiological response and selected seven cell shapes to describe the molecular mechanism leading to phenotypic diversity. Transcriptomics analysis revealed a tight link between cell shape, molecular signatures, and phenotype.',selectedsurfaces:"1553,342,987,756,2311"}
                    ,{name:'Encapsulation',date:'05-11-2014',cellline:'purified monocytes',topochip:'Polyurethane',leadauthor:'C. Diedrich',leadpi:'J. de Boer',chipreplicate:'16',description:'TopoChip screening is performed to assess possible beneficial orchestration of the foreign body response by topographies. Since macrophages are major regulatory cells in the foreign body response, surface topographies are selected which showed differential adhesion of monocytes – macrophages and their fusion into foreign body giant cells. These topographies are implanted in a murine subcutaneous implant model to investigate the foreign body response.',selectedsurfaces:'731,2076,1700,1584,2116'}
                    ,{name:'Osteoinductive surfaces',date:'',celline:'',topochip:'10',leadauthor:'',leadpi:'J. de Boer'}
                    ,{name:'Soft Tissue interaction'}
                    ,{name:'Cardiovascular'}
                    ,{name:'ADSC'}
                    ,{name:'Endothelialization'}
                    
                ];

    $scope.selectData=function(){
        $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.name == this.data.name);
        console.log($scope.datasetFiltered[0].selectedsurfaces)
        $scope.fileNames=$scope.getSource($scope.datasetFiltered[0].selectedsurfaces);

        ;}
    
        $scope.getSource=function(name){
            sub_images=name.split(',');
            var images=[];
            for(x in sub_images){
               images.push({imagename:sub_images[x],imagefile:'images/TopoImages/Surface_FeatureIdx_'+sub_images[x]+'.png'});
            }
            return images
        }

    $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.name == 'Hepatocytes');
    $scope.fileNames=$scope.getSource($scope.datasetFiltered[0].selectedsurfaces);
});

