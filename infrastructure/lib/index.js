import S3Stack from "./S3Stack";
import DynamoDBStack from "./DynamoDBStack";

// Add stacks
export default function main(app) {
  new DynamoDBStack(app, "dynamodb");

  new S3Stack(app, "s3");
}
