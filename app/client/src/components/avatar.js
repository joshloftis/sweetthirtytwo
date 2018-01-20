import React from 'react';
import App from './App';
import '../css/avatar.css';

const Avatar = props => 
    <div className="upperleftlogo b--black-10 br3 ba">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA00SURBVHhe7Z0HcBTnFcdJTyaZlEkykzbJTJqTOGUynkxmUoYkSHdHMdg02zjJQJptTBLbY8fEgcjYSLtHMR0jbFowJqaHZjoYuN1TMQKZrkJHCFBBFSShL++/+77ToZG427u9uz1pfzPfUG73ve+9r9ft4+Li4uLi4uJimQy18FNef/CXHlUb51W0+V5V3+hVtUKvol/yqHo1/buegqC/t3sUrZ3+bKNQ78nRztBze3xq8GVPduF3WFxEfFnBT5LsX5HMZygsI1kaya0g3Q2GHkWvg16KD8nXD5KO/9JvCv05sn9O3rf7CPE+FtVz6K9oPyCnvGg6Q2+DI2wIzR41WEgyx/hmbf0Iq+rTLyfvs5lqcLiR2Ip2nEJ7F+9GHxS9ksIbPlV/ePh07WOsJv0YkXX0w94c7XEj93dlKIUHZ+SLsYuLxYTVJ8S0LaXi1V1nxKJ958T8neXi2RXHxNglR8ToBYfEsJkFYoA/2KUMIyh6C4UAhSLK6be7fIbCyNmF4rk3jwl1Y0lIF8Kc7eVi6uZS8Q/67Q+5RWLglO50abUUcj1K8EdsZhpARRy5lkrC2c4GPb7oiMjdfVboJdWi8sZNYZXaphaxpahS/HvNSfHQnEKS2X0iDZwaFM+8cVQs239eFJTViOqGFpYSmda2dnGqokFsPnRFTF5/SjzwSv6d8lHqFH09Sj5b7UwGTA18jXLQ7vDIPzK30HDKxepmNtc+4OSZ28rEA9PzQvqoahHjVx4XFdXWE7w7kED5pTUiizJC/ztLaitlvimOrMp8/kA/s0ibkX2IqocNhRXiVuttNitx3G5vF9uLrxo6pf5hMwrEjveu8hP2gZL9ytYyMSCsWqPa4GSGqn+XXZF60OBR3X1LRtC/qUTcaGplE5JH/c1Woz3w+c14IMzaVi5a2uzPFOeuNYmnlh8NT5Q6jz8wiF2SOrx+fbDsOSHXoN5NNUcv1IlR894NOQuOq2u2P4O03W4XKwIXQ9UYZ8qh7Jrkk5kd+D5FohGRQSMaOF3FUU09aF/Qa5KJ8hh1KKw07FY4eKpK3D/NbMfMRAl42UXJw+jWUjcTkUBDuvvYNY6ec2ilHIwubniiNNxs41/t5dCZWiNTGroUvaqfkv91dlVyIKUTpKFzd5RztJwHtfdixttloUQZvaCIf7EfZEpkTjNRtIIRq1Z9gN2VWAZNK/wcFc0bUIyBVDJ6UvGAXhi6rIjv7189xP+bGDDOkolPPnqKXZZYKPUVqfTASee0G3cDDfC+49fFWeodJRL06P7y+mEzQajnhczLbksM3HZUQuHYJcWCagSXTmBmQGZYj6K9xK5LDKRkqFS29XAlR8GlM5iLM/yk6DV9s/Z+gt1nP6RkGRShm9d0KzE9lp4AhgAy41IpGcXus5esLPF+WV1NXH2CVbt0BdoszONxomxkF9qLV827V6b6JgeMyJ2O7G5T436Tqq2Pshvtw+PXHpUJcrqigdW6dEeARvDSX5nZ2s/ZjfaBqWYIx5xVIibsehqYqpEJQkOF59iN9uFVtTUQ/qfXDrNKl0jISU4aJC5hN9oHJUgQwp9feZzVuURCdn8pQfayG+2DGidjWXba5lJW5xIJP09uku9K2Y32IVcEnTyZ6DSwmQI+wwCR3Wgf1DAZe5kW7zvH6lwiAV9xCaljN9qHkdJuglhCJggCu9E+qGEyVgdf23OW1blEYiH5Cj6D79iN9uFRtGsQPmtbGatziUTH4ph2hd1oH1QPFkM4FntcogNzfpwgh9mN9kHFbgOEY5XQJTqwFRY+o9plLbvRPqiXNRnCse3lZos7dRKJZvJR2B6xSexG+8hUtPtZuCgsr2W1Lt0RvnKYqer92Y324cve/3mqtozd5W7XNzKv7w2NQdoGKgc+w260FzmfhYV8l7uDSVgzQbQD7D77oQT5J5QgnLnayKpdOlNOvpF+SsjUu8SnBr8iq60l75xn9S6dwUEg+MioriZrX2b3JQZK8R1QNmJWgeM3yaUC+AS+4dKxld2WOLCLwlBGYWcCzmCkO9uOVHZUV6o2kt2WOHBiCNPJUDhuaTFHw0WCDYTwDaaawg+kJhQ5SEQ4cameo+KCsynSLxTsHwx2x4ApeV+gBqsJil9ef4qj4zJp7SkuHXpTwvf1doZKyUIox/SA2wUWhg/CjiPMZzclD0+O9k3ZBVY2lnC0ei85/zstS0cbfMNuSi4eVX9TlpILVYnd6u9kzl9v6phIVPQV7J7kw+cMjVIyZVPvLSWw3Sgd5AtfdvB77J7UQH1tYwMddjRerrHvwH66AJvluXWqMVaxW1IH7v6gRsy45AXnwnsbsBm2wweOuW6D6s31iBROol6vu8VR7fnAVnn6NiGrgrFCpeQ+WUoW7Oo9u1JgqywdPiXwY3aHM6AcshmRGzw9T9Q2JuaQvpOAjbDVTBB9E7vBOWTm6D81IkchGVPz16i6wDQ3LgQYQo5BwN/xf8moNhfvO28mBgVfTuAn7AZnQd2+vYggbuPBZTCJAneqyOssugr4DXdrJQrYNnSGeY8W9ax2svnOw6sEh0inrCu4zNG3l7f0S3c4n6oL3CY3B4Gco4X/hmcTwdr8y2H6g0PYfOeBg6EeRS9FRLGmbPc59vyymo75IlW74vNrfVl1CI8/+GtKmKt4Bs/avUMGNv1xobleTqEENrNqZ+JRg89yZMXhczdMK2wAJ1txNQbLrvdkB7q9ndQ4oMq79cfkFhnv2kXR2RsyDiidf2eVzqXvjL2fllPzdk464nKXDkcEn2R13ULP/U0+j2s17CI0iahqjbCV1TkbOZ2CCyTtWnd/klfiKFeewxUfrKpb8Ax1xS/gHbxrB7AFvTkzHtpqVuV8sJZsRJoCjgfHy+WaZtMJpiNeYDURoecnyvcgI17Cjzr7FG0Eq3E+mVMPfxxFGhHHHYzxggs1pSMy/Pq3WE1EcDu1fA8y4gW2QBZsg42sJj3AzCcijzEJ7qyKh3+t4m39ilbO4qMGVRzenUAy4gE2wBYzQRwwq2sVivQYw4kUSq7Ed/ND2D4ny/U2Jv3wLm62jgfYIO2hRB7N4tMH35SD35AGxDNIxDSIlOPJ0Z9n8VFDGWO8fD+eizDDB4NJv1PRLignXYIBL62LfWdK+LZ+XNjMoqOGSlWGfB+yYuXFteY1gagCWXT6QdXFShiBKifWVgQ3D0mHeicXfJFFR02G/+CX5Pux3mKEJnD4TNl+aMtZdPpBA8QnpDOwESAWwmZVW2O56bNv1t4PkhONdf+lMc5CY4uPtIOqwD+z6PTDWN5lQ3YUx7YPWG4gQPXHYi2DeS/ImL4ltmtB7tiv6z94D4tNP5CjyQjjqzmzt8e23o7LbvA+5cx8FmsZShDjOyYvvBVb1xcX8BuJoWq1af/VHTLkHRgT68bsvy57jxNE28AiLUPvvw0ZuAc+Fp5YfMRMEEXbwSLTF8rZoYvPYpnXkkfDqMqKeQMaxcHY0BfLUTxc9hn6boiiTWaR6YvxTSgYQ+HYxTo2M3pGzZVfOtByWaRlyJGLIePRee+y1OgpPh823e7XB7PI9CVDPfBVaRAGV1aRS6UUZrNIy1CC4ItwhiyrrAp2rFBi1z+LTG9oPFIBg/BNJ6uEEkTRFBZnGbwba4JMokEt3qU27AyLS3+oDl8Ho2KpMlKdIA8bHyCjBKFBLotLfzAHZTiVgtUtOqlMkCu1N03dFDIV7WkWl/5kKsHfSMOsLliFHYKJO0Gw7dMKWPqV8faogZ+xuPQHF9KTUa0wDFdOWEE6xI4EQbCCvDPRk6jbqVMJ1cE6jHva4uBMOjIVCSLX8alBt/+a11RDDXs2jMMAsdHCt6CkI5OdIPj0X9j1ShNZVM/B/PikaWCwtJrNjox8J9kJsv9ER/tB7dgvWFTPwbhwQNWbYSA+ABkt0inJTpDQhKKiNdyXW/ghFtWzoLp4C4xE3z6afQ+Y+5KOpCpvPIuxDN6VcqKZT8Mn9+Q6PsZQLKbnQQ176J4UzBFF4np9x3p6NLsVu4Mywjgpp6o+8ro69gPL532K9iCL6XkY+7UUvQ6G4hvmkSir7FipwyQli7FM+Ma9aC45yN5gbhf1KnpV0u4rSRVUSv4DY/Eh+UjfVd91NGw/r5p3L4uwDI5vSzl7InyV9FJ1c9hnumOfYU4bMOKVzkHDeTc6bkfQrsXz5UysqyO3QxY+x3o3OpaMtXbfFP2HLKJnQ9XWNhiNaZHutubgo/iDpoZOSS3iV2OGEmQpZEFmRW3XJVM7XS31UdDW8Ks9H+zPlUcWhs0sMK41CqemsSW0bEoN8m1UOfxqzCC3QxZk4k6rzgdTi87WhiYy0c5hHYdf7R14/cHfoVqAAzAixv5dzHPhIyg4xoD/5wSZya/EDVV9s6Rc6MDmaeiEbjkqp8Ro8+YEHuFXehdULTxGTjAGi10FSowldn51GbJI5vKudCHQb40+Rf8tP947wdE09GYolJFTmrH/iv7cmMj1a8g2dJi6kCFKqPTMS+s9Vy4uLi4uLi5Ook+f/wMIx9VB+5R/7QAAAABJRU5ErkJggg==" />
        <h5>Orthodonist</h5>
    </div>


export default Avatar;







 