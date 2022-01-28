###########################################################################################
############# script to transform the mechanical tests to a json object ###################
###########################################################################################
# Author T.J.M. Kuijpers    Date: 27/01/2021

import os
import pandas as pd
import json
WORKING_DIR='C:/Users/tkuijpe1/OneDrive - TU Eindhoven/Documents/05_MDR/02_BiomaterialsAtlas/02_HeartValvesAndVessels/Vessels/'
FILE_NAMES=['21G7-R Carotid - 50%_strain.csv','21G7-R Carotid - 70%_strain.csv']
os.chdir(WORKING_DIR)
json_object=dict()

for x in FILE_NAMES:
    tmp_file=pd.read_csv(x,sep=',',header=None)
    tmp_file.columns=['Stress','Strain']
    tmp_split=x.split('.')
    key_name=tmp_split[0].split('-')[2].strip()
    json_object[key_name]={}
    json_object[key_name]['Stress']=tmp_file['Stress'].to_numpy().tolist()
    json_object[key_name]['Strain'] = tmp_file['Strain'].to_numpy().tolist()


json_object['Documentation']={}
meta_data=pd.read_csv('21G7Metadata.txt',sep='\t')
x=0
for i in meta_data.Key:
    json_object['Documentation'][i]=meta_data.Value[x]
    x=x+1

with open('21G7_StressStrain.json', 'w') as json_file:
   json.dump(json_object, json_file)