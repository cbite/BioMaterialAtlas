###########################################################################################
################ Python script to create a nested JSON object per study ###################
############################## T.J.M. Kuijpers 13/12/2021 #################################

# import libraries
import pandas as pd
import os
import json

# Change the working directory
working_directory_path='C:/Users/tkuijpe1/OneDrive - TU Eindhoven/Documents/05_MDR/02_BiomaterialsAtlas/01_TopoChip/01_Studies/01_ALPScreen'
os.chdir(working_directory_path)

# Files should have the format for studyDescription, studyDesign, and studyResults
studyDescription=pd.read_csv('StudyDescription.txt',sep='\t')
studyDesign=pd.read_csv('StudyDesign.txt',sep='\t')
studyResults=pd.read_csv('StudyResults.txt',sep='\t')

study_data=dict()
study_data['Description']={}
study_data['Design']={}
study_data['Results']={}
i=0
for x in studyDescription.Key:
    study_data['Description'][x]=studyDescription.Value[i]
    i=i+1
j=0
for y in studyDesign.Key:
    study_data['Design'][y]=studyDesign.Value[j]
    j=j+1

k=0
for z in studyResults.Key:
    study_data['Results'][z]=studyResults.Value[k]
    k=k+1


with open('ALP_BMA.json', 'w') as json_file:
   json.dump(study_data, json_file)
