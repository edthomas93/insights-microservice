#!/bin/bash
MAX_RETRIES=100
RESPONSE=`curl --request POST -s -H "PRIVATE-TOKEN: ${GITLAB_TOKEN}" https://spokedev.githost.io/api/v4/projects/368/pipeline?ref=develop`
#RESPONSE=`curl --request POST --form "token=$CI_JOB_TOKEN" --form ref=develop https://spokedev.githost.io/api/v4/projects/368/pipeline`
PIPELINE_ID=`echo ${RESPONSE} | jq '.id'`

echo "NEW PIPELINE_ID: ${PIPELINE_ID}"
echo "Waiting for release deployment pipeline to complete.... this may take a few minutes."
echo "Monitor progress at https://spokedev.githost.io/fab/release/pipelines/${PIPELINE_ID}"
echo "------------------------------------------------------------------------------------"

COUNT=0
unset SUCCESS
while (( $COUNT < $MAX_RETRIES )); do 
    let COUNT+=1
    STATUS=`curl --request GET -s -H "PRIVATE-TOKEN: ${GITLAB_TOKEN}" https://spokedev.githost.io/api/v4/projects/368/pipelines/${PIPELINE_ID} | jq -r '.status'`

    if [[ ${STATUS} == "success" ]]
    then
        SUCCESS="true"
        echo "Break!"
        break 
    fi

    if [[ ${STATUS} == "failed" ]]
    then
        echo "Break!"
        break 
    fi

    echo "Pipeline status: ${STATUS} (attempt $COUNT)... sleeping for 5s"
    sleep 5
    
done

if [[ ${SUCCESS} == "true" ]]
then
    echo "Deployment successful!"
    exit 0
else
    echo "Deployment failed. Check release repo logs at https://spokedev.githost.io/fab/release/pipelines/${PIPELINE_ID}"
fi
