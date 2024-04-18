import { Typography, styled } from "@mui/material";

export const MovingText = styled(Typography)`
  font-weight: bold;
  white-space: nowrap;
  @keyframes move {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-200%);
    }
  }

  animation: move 20s linear infinite;
`;