import { greet } from "shared";
import { getUsername } from "shared/utils";

const username = getUsername();

greet(username);
