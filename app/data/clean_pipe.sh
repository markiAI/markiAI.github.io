#!/bin/bash

# Check if input file is provided
if [ -z "$1" ]; then
    echo "Usage: $0 input_file.txt"
    exit 1
fi

input_file="$1"
output_file="${input_file%.txt}_json.txt"

# Initialize line counter
line_number=1

# Process each line
while IFS= read -r line; do
    echo "{ \"id\": \"$line_number\", \"title\": \"$line\" }," >> "$output_file"
    ((line_number++))
done < "$input_file"

echo "JSON-style file saved as $output_file"
