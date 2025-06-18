#!/bin/bash
cd /home/kavia/workspace/code-generation/promptlab-60950-52feb001/promptlab_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

