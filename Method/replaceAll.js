const str1 = "I'm [Mike]. This is Tom's [Car].";
str1.replaceAll("[", "~").replaceAll("]", "~")
//I'm ~Mike~. This is Tom's ~Car~