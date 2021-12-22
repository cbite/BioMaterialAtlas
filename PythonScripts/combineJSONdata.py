import os
import json

# set the directory containing the database sheet
os.chdir("C:/Users/tkuijpe1/OneDrive - TU Eindhoven/Documents/05_MDR/02_BiomaterialsAtlas/05_CombinedDataForDatabase/")

files_in_directory=os.listdir()
BMA_json=dict()
for x in files_in_directory:
    # open load and close the json file
    x_data=open(x)
    tmp_data=json.load(x_data)
    x_data.close()
    # add the json study object to the complete data object by the first part of the file name (StudyeName_BMA.json)
    study_name=x.split("_")[1]
    BMA_json[study_name]=tmp_data

with open('BioMaterialAtlas.json', 'w') as json_file:
   json.dump(BMA_json, json_file)