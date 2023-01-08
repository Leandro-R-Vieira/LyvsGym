import { Box, HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Button } from "@components/Button";
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg='gray.600' pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name='arrow-left' color='darkBlue.500' size={6} />
        </TouchableOpacity>
        <HStack justifyContent='space-between' mt={4} mb={8} alignItems='center'>
          <Heading color='gray.100' fontSize='lg' flexShrink={1}>
            Puxada Frontal
          </Heading>

          <HStack alignItems='center'>
            <BodySvg />
            <Text color='gray.200' ml={1} textTransform='capitalize'>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <VStack p={8}>
        <Image
          w='full'
          h={80}
          source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGBgaHBgcGhwaGhocGhocGhocIRocGBgcIS4lHB4rJBoYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QGhISHjQrJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD8QAAEDAgMFBgQFAwIGAwEAAAEAAhEDIQQSMQVBUWFxIoGRobHwEzLB0QZCUnLhFGLxI7IVM5Kis8KCg+Ik/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAICAwEBAQEAAAAAAAAAAQIREiEDMUEiUTIE/9oADAMBAAIRAxEAPwD5AF1MfDZIjnvXatEASEUsusF12F1uqB7Z3zH9v1C0K4lh7vVIbP8An/8AifotF47DuiivPhiEWXTMIMXPVVl3DM7beo9UKqLpigYe0niPVCqMk2QCaFxGbTA1Ktna3Qe+9AfBt7Luo+iXbhzvt5prDVC4O3RHP1ST3k6koHGYem2C51+BP0F1f+rpts1vgI8zdIaBRgQei/DNXNUfaLN58U5jx2x0Cz/wn87+jfUrT2iP9QdB6osPf08yeqzdrDsD9r/otukLuHNZu3qJDdNWPPpKI8mxIp5qRQRGDeyCghpTDW9kILVohscD6BLOTlZlh0PqEm8IOSuhcUAQen2Yz/8AmB/uPqV53EfMV6jAMjBsP9zvJzl5Wt8x7vRVmfVIUXJUUadhcUUQRRcUQab8OLWFz70XH0i3pw1g/ayG/POWbA2Nu49Eajh4MudJi3XdfqAoAZVwaohbe1+HTcqlpETxhVTeA+cdD6LTeew7ofRZ+AbNRo6+hWs+g7K7fY+ig8690FAM3R6lLtHdc+qXew5iqglFsuaDcEgFCxLYMImHaQ9vULmPbD3DmgA1XcFRXa4b0DWzxZ3vcfskxqntnR240j/1ckiYnqgjhJhXVKaug3fwn87+jfUrV2gP9Qd3qVl/hATUf+1vqVr7Sb/qDu/3FFMbRxbaMvdvsBvJ4LzGL2tVqHtOgRYAQIOvM96e/FFRzqjWNHytnvcf/wA+aUZsZ+XOffd70UtaxxtIUjJuB4gT3JTPFst16KjsNzqb3mSAIECTO/mBCwsSzra19dwUl2ZYXGboJrFFBOUJYNT1OmS0WJ10nWTwBWmEq6D9p9WpOpqna7YBmxAiI5tmeCUqRNgfH+EAl1q6utcN4CD2WFZGApHiX/7yvHVvmPd6Be9yRs6h0cfqvHYDD538Yjx3eirM+q09nOIkkN970J2Cduh3Qhel2nhSxl9zGvP/ANhAZPc4O7l59ze9Gib6ZGoI6qq08NV7QD7sNiDcRxHBA2jhQx0DQiRy5KBNRRRBp1mgO8CO6328VrYhgiQOHqs3FCwPAx3H2FpsIIg3iFFZwpgy06tcfDd5EIGNZAb+4I9V0P8A3DzH+QqY9vY7x6FEG2f/AMxnX6FelDgGO6O9F5fBHts/cFv4h9jHAqqwK13ErOuTNzx4aHf3HwTz3aodNwyvEC0f7Kv3RAAYI6q21P8AmO6lG2kfkP8Ab9vuq7Ra74j4H5vr/CBEtRaWFe64Ejju81dtOwBt2rnle69dS2I95DKQa8ZWuzg/6bRGmbjM8TYc0JLbqPNYOi9uaW6jlwPDqg0tn1Xu7LHOudBbx0X0PD/hujRaH4h7XOMkSctO3Cbv92WtgNsYJkh01X/ka0ZWDkTrPcs3OfHfHw33Xz3B/hOu8y9uRvc4noAV6DZH4RovgOY48XEuk9AIAXsqf4nptEGm0C4y5bidCC7Va2xto4ZtPTKSLz2ieXDwXPlb9dp48cfm3icV+BQwg0Xua02MfN46kdZSGN/B2LbDmVA8f3FwcB0JM+S+jjEUXhxa5rS3tNkwDGon6Lyv4s29XZVa2kAG5GZd3adPzevSFJll/Vvj8f2MbDbGZUfILnEfMXGHakGd0203cYsGtoV2PpwzKG9hoZJJDw9zXkjVgFv3AzrKUx20hSYW/O8klzhPae4ydL6rHweOYHOLj23EZt144Kzdatwx6j0O0y7DMDmMe9ps0i7S4XhwBBdvsCvnG1KxdVeYDbwQNARr5yvft2iGtzueBluxm4ne7eBad29eC2tihUqueGZM0SJBgwATIA1ie9awjj/0ZSyapWmBKepkAMnQgyeHadB9EhTMGeF05VIIYAAN+p36DuXWV5LNul9nXvA77jik3Ez3fRegpV8804YAGkk5QXaiJcdLxpGqyawBPZFh4lLAmR6D6KoTGct0kSC09CNPRVw9MOdBMKK+gYu2zaH7Cf8AsWD+G6QDHVARmY6W8QW1KIBO6O25Dwu16jg2jUfNIQyC1nZYQGlwOWQQDMzqLyj7ApuFOs0iHAuBHMVMPI8lqM+hNtVSaZvacOP+mk8BecW/tQH4RP8AfT/8b1g71FiIOIOiOHD6JfEHRFAUXVFBo1MxDpfPIARZRuKa753EAAWE9ogakhVxbBlsANEiQgec6mCC0/m56Rz5wmBiabgQ4/ldH7oOXzhZCiBt+IylpaROvgtDBY17nOY6DbduWWKIgEmJ0ESUWhVLXSIOYgEbxuQFe8CQgU33f73OH1RMRq7v9EKke0OZA8bfVA88AsYTubv5x9ku6tx6yi7RfLoFgNyRJ7kUUVjOYai45EXHoF7/ABu1y5rAyGsyMdAEAlx377jLPUr5zm9/ZbOzsSXNDJ7TQQ3mJkDzWco6+LLVsfQcD+JqT6TadWg15YXZQ5rXQSZ0+y8vtXahNUhtNrCCQQGhkGeEaIGDqucLETYGbGd1+G5J7fa6WvlwcOw8OBDgRcTOtpXPXb0XL87jVxuIOTO54LwBFyR0lZVPbL+P1WbnJHaJMLmDw4Jl1pWpI5XO29PQUtsvLhBvI1ufDRNbU2qWsk9qo4zmJ+W3r/KS+BTY3MHEFOUMAyoyw7RGp8+iz06Td6YmFrPqvygnNDiDzAJ8+KUfTm9547167ZeDo4d4cXS8yOQBEH1XnNox8R8aZj/PnK3jZa5eXG4yW0jVxji0M0AuSJl3DMl8W2+YaQFw712mZBb4Lbhbb7ACbZ+Tu9UoUww/L3IjWEMpPfvccg7tf93/AGrMa5O7UdDGM4CT1N/qUrhmS9o5+QufRaqRzH0MpAmTEndHnzS9LsnMYIniN4PD3ZHx1aXmdLi3cly5oBAmTGsRaVlTLCA4ybEQffivR0XfGY8yGiA85Wtu9wpZ5dEzme7f+UIu3KjP6ZjRkziiwH5c8QInfCR2C7/ScOOYD/rYf/Uqs+zu3m9hw4Ppf+N68z8MkgDUr0m3ajS18H87OsBjt3h4rJ2YA0PqOIls5QSJk6W8PE8FSXoHaDGtDWBoGXMHOBJD3SJcM0EbhEDRZ1c2HU/SPqm3jM1om8vJ73fwUJ+Gnf5KSNWk1E1/ScyomhH1SWz74JUJ0sGTpHmg0WjMOc+/NQAUCfEdqRa2nUaJYMvyBP8ACDou/wB8FfAt7Y6+k/wgNs4E8ZTuCaCcwnU/RBXFHtO6lApCSOoPgmMU3tO6lKCnfWeiB3GPlxSgdyTeILYIkWt4JMHvRUcLSrYZ8OsY3gjio2CgNQl1W5hdoOa+XXnXdM/yvTbTZTxNDI1pbUZLqZBzMfIksIN2uM25gcV4ymAWg6kjzkra2Hj3scMpJy3gXlo1B3cVjKfXo8ecv5v1iFp0/jxRKTXGAASeAufAL2X4o/DLng4mllAdBcz5ZMDtMJsZ4b9xJMLx+ynPZUDsjnHMABpJB0zGw0Vx1Wc5cbrQji90Sx0DQQR33Thr1GUnPbAyuY2Jv2w6DbX5Sj4mpO6CA0Ecw0BcwIa9/wAJ5htRzL/3NJy+OZw71bjNMY55b09D+FdiUMQzM8vNTjmIg7obOi8btKm5lR7H/M17gfHXv1XtfwrXOHrFjiLgGdbOEjod3ci/jLY+HfVq1S54e4MLQ0sDXSDmJzXJEAW5LGP+nTy/5l/j5m9CDodKdx1AN0J9lCwrGmZE24kei6POHiG3kaFFw7MzmN4keG/yVKmgbHRMbPGrv0tPibemZWDmMqZ6jjum3cj4G2d5/K3zP+CkmcU285aPN58hb6FQZ1Q38VGsJ0BNtwlcqJzZuNFPNbWPJBo7SxLqjW/6b2lrAywJnKSZNhEzHcjh3wKQgS6LngTqffJDG1yLuY7vbEKY7FuezI1l3EC0X3/RXcNEsYwtdkOrbH935555p8Ai/wBO1jQ+oDJ+Vm+P1O4TuCaqYE0ga1WCSSWttqZMkcB4LIdWe95c6TKDlTEdokANB3DT3YqpxJK69hyt7J1du5oD2HgfAoC/GKiBldwPgVEFnusBPuVUGCNLELpb7iFTKoDVKoOiECplXWgIITKd2cfm7vOfskgY4eqawTpJEbvQ/wAlBSrReToY5n6Sq/AcAT13hTFfM7qgQg+m7VxTn04MANqFoE2gNaAAPBJYTCseSHMYerWn1SYxBcwcDD/FjTdaGDeA+dQQFyr2YSViY/DUmvcC1otuEeQWPQ2U5wmfJa22aodVI5geFzbuC3Nm4YODBpMK8rIzcJlk8Y+jkzsyEkDUiYF5cBu3eC0sFiWscS2GTk7Lv7WtMg6mSXGIgWuZhaH4lbkqBzABqwgiQQRv8F54uJyzByjKDF4EwDx1Wp+o438ZPa4rbzXYb4T3iA12QN1JYbNdHkeC8iKL4c74lmESRrD75gejye4pV4RtkDNWa112yBB0idI4XKSaXPyctbjUrZszy4ySbmZk3MzvmZWdVq9ojhvWjiGNYcrQAOAELKe3tE9Vv45W7r0ezXvrMfVaBnY5jTcNu6ZAvEWkbrlO7WwNevh31XAj4RAA1LhHbIIsQLRGsFed/DuJc17wCRmEi/5mkx6lfWtn4oV2AEDM9hB/S4wQ4dQQ7uXK9V6sf1j2+I4q436cDC5hXOEwLERK0/xBmDu1chzgZ4iJss9mPiwaW/scR5GV1eWzSppusY0Vc7mhwizonun7pj44cJL6jRuMBw5zcHgrV8A4G73OHJj59I81egnhmOe4NaCd+k2FzZG2k6MrBo0ItCpTaQRI17XdxlNOwrKgzNIL79njwg7+5ZGHUVEWuIcREcrnzKGUG1jcU91MtcQflgxB1HBUwdZzGNedBaeBkx6FDxPyHqPVXotnDkd/g5xQPVq7KoAfNt4cfQGEn2GktGgJjxWQLJkEwPqrLop/4jVwuakPiFV+MryTTQzNXEh8YLibXTpCrCYyWQst1hrShapkKPl5hQDmhpWiAAS4X0HKNT5jwVsJTc5wDBLnGAPeiHiDEdPqVrfhau1lQkxOXsz1v9PBVNdgVdmVg5wfSdOhgzfuMILtkVf0Ed4HqVvYnajAS4O7Rkkzck3MgDiibMqPr5iSRTbAcYkknRjJ1cfAandOOVdp48fRdzXto03EflyuE7gXMafABOUamVgi53CCSeQhbeEoUnsfSe3IMoAJN/mJMcde9KOdTptIzQWyAeIvosWu8x08fUMuzOIzZx2Z0mZPS3mvU7DxN8k204715eqxpyuBlxmfH+Vp7Krhj4cYWr6c8bqj/i98vHMz5fyvNytX8S44PeALwPX/AAsjtHRvvuWseo4+S7yrpKZ2HHxmn+4ev+Ek5h3kDvTezHBlRpkADfIWmGpjj2z73rLqalaGNqtLiQ5pud44lZld0myI7h6hY5jwQYMwNQMzpB5kSvZ7I2xkcBJLZzCNYJ3d8HxXhN3efX+Vp4JuQS6owG2VodmcJO8tkAciZWcpt0wz41pfiYCm+XsDmVC57DoYO8H6dOKxRQoO+V+U8H3HivYYzFfHwzSBL6RIA/U0xIvzuOhXlv8Ah2JfH+m0A7yGD/ddMb12ueN3ufRcFg3ta8ENIgXsRJMRB4g+SVq1TkAa+C38uUBxkQSCN1uKa+G+gCTSfG92ZpaBu+WzdFm1KokFo03kg7ydO9a252WXsKuIAG6SR76yrYB5bUZDi3tNuNQZsRzmF1gL7uiB/nfuUwlA52XHzN/3BEG2yJfngAkmQLCZmw3DWyzWham1mEugcSkWU3SLHUbp9EDmLMMcOY8iU1s1s0e/6uSmOBDTIiXb7cVobE/5fKfq5Bn4vCtadLy6w00BA80B1NxmGu8CtLE454ebjjpfcAD0E+CDU2xViM1p6d8IA4fZdZ4ByEN/U7st/wCo2HerVdmtaSHVWTyBPcCLFBxWIqOMOfeBv+qB/TuN0DH/AA9v6x4fyolv6V3BRA0G8vJVLOSZps5q5pHjHvos7bLNB3ArrWHh4pkU/wC5QsHFybXTMxJl3S3hZEw+HJvceIVGMzPjmZ7lqChG+O5W1mTa+ytkvxNdlFhgvdBJvlaLueegBPPvXtsNUpMeG02ZqdORTG5xBu4nfeTO8ry+ynuptqPYSC4Cnm3w4y4DqAO4FaWBeWiAYB15rGVejxY67ae1XgkvMOvIvBE77b14Pam0y4lrdN549OAW5tvG5uw02/NfyWJWwzXC2t7+l0xn9PNnvqMtr40lGFcucMzo56eiHXEEjhbj1k77ocrbz7pmu2O1Mzbn1KgxBDQ0Wmb8ifJL5lHPngqguQfrb/3fZWbA/O3wd9kvKkohr4g/UPAqZ2/qHg77JWVJQNFzf1jwd9lXsn8w8HfZLypKK1MHtA0iHNc0kAgZsxAkRMRqOa47adQuzmpJJkg5i08iCIhZmZSVNLunWYlzXFzHhpJNhmywd2UiI5FLvuSS5skk6Ea8gLLtGgXAwRI3Kxwjv8R906O6o1saOb5/ZN7Oa51Rl5GYHuaZPohUaDA4ZyY3gAg9x0T9XG0mNIosIn5iXBzukwIHJVPQWPqduwnVd2fjhSfmc0mAYA4mL+EpEvzHimGUwbCJU2uh3bRL3B5BzEgngb6dFptYzI/IeySItETJjuNu5YzGEb4Wng3ANcyd4Pr90NMvEPd2Q46F27qDffqEpW1WltCnBG8gv8w0rKfqqy4i5HAAgiDO/nvG5CBRTiHENBAhogWQXAf+pv8A1D7qItNkgKKbXjTTafv/AArtZx9UqJ4equHHn6LLZwMHD35LvwzwA8Eo17vZXc3E+CLsy2g3WBO/2FcM4N9+KV+J+7xhNYIh72tJETeSTDRd3kCimTfIwWDbn9ztfAADuKYrYgMZbU2HJBw5BLnDQkkdEhiMQXOJvG5Z9utvGIWzdLYuqGt/uOl/NWdVKz7vdyHotSOFprZ9OBmOp9E8Xcksx/RNBwjUd38K7NKPJjRZoqVnaT4ALTLxwldFT+0eqbLGU7DVT8xPe5dGBP6h4FaRrA7j5BXouvoB5nzTacYzm7PP6j3N+quMA3+4++QW2GNP6j5Kdje4DxJU3WuMYdXCgZYb+YTcmx4pj4AGgHc0DzTeLpscAJdrPD0RGEWFz1JV2TFmFg4+SLTpT7C0TRYdXNaq/wBMwaEu74UXTDrMNJ8wYPpvHvktC5AiDwgK+NwuZpE31F5ulNlYstlh3TH1Cvtn1TGWdWqlTCsI49x+i0PiMOv0R6baZtMKLpif0zv0gDqqNYAb/ZalbCNJ7LvfVUbgSN89Vdmma+oAbD1XP6jLe613YEb/ALJergmEECe77lNpxpHFYoPEz16/Yj0WfmutungA3n1AJVhhRwATacayBXG9qu2qzeE/VwrD15JZ+Bduh3grs4qZ2c/EqKnwRvZ5ldU2mqMGniisZ199VdlM/wCEVuDPMqN6BcY4eZVHNPHwsnW4UjeO7VW/pv3FF0zCxaeAw+Vj3kEFwAbr8riZI5dhwnklscSxsgBpm28npw6rSo7TY9rM7gAxgbrBEajXiT4q62ksl7Bc0tp7+1bnCz3UzwjqUxjdpsc4Cm0hgtmcSXHoJgDrfokMTicvX3dTVXLKULGVSOzOuvRDw1bL2Y13oQaXGbk/fd1T9HZT9XBXqMTdqfGPAK5rcYTWH2PmO/uP2TrdlEbh43U3GuNY5rngqGueC3Tsh36UP/hTibNBTcONY3xjwV6eIO5a42O7gJVm7KjWB1+gTcONZbq7+ICG6u7jK2H7O4AnuhL1NncW+qbhqkGYq+ngnWBztBHVWbsx5+VseXqrnBVG6kHlP0TokoNWmRv8EIPI1sn2sf8AoFus/wALhLRd1J3WD9QikmvnST6LMxwyvkWNp6r0T6lNzcrmOAPQ+qwcThYmIPu3T+VYzkJhyHzHZjv8EenRAO8nms/AVsj5mW6HoeXn3L1OHE3kj3xTLox7ZD8NU5geC4GvGs+YXo2Pbe0n3v1V2YV79QGhZ5N8XnRXfvkpmnX5Lafs5gF7+SA/AfoCnKLxsJFx3ABKVmTx+i1jgoFz1A+5S1VnASfJXZYz8hGgA8yuGeCZNJ0yXeCFUDjYX6fUqoFm92UVf6YqIz24zEu3NPoiDEPPAIzGhGbTafyz1RrSjMQdxA98Aitvq/zAUdhhFiGoD8Kze8k8Ah2zNssdm4t3QZjjPBZhXoHbNDjLQ4cz7KDV2G7cWz71Vlc8sbe2ZSMLrnCflHgjnZ1Zv5bdR9Sut2dUP5fMfSVdxON/h7ZVBkZ5E3gD8vPkfotOm2bRmPj5LNwOGNMnMMxMWgwPutOk928Zep+izXXH0Y+BxOXlr5BTJGhJ8h91KbW73zyFvVM0jGjQOZ+5WXTQQ+IBYW7/AKqrK9TeAT78U255Op8P5Qnv4Cffvcps0H8eppfuC6xzp+TvKYpuMCQB1V828kx4BNmgDiWtHbJngI9EM7RboxhndP2ElNl9N3zAW4NHrCsBSA/KB1j35qpooA9/zODR4e/FGoUGcc3oqmqzcC48Tp3AqpoOdcuyjwHgoSGnZANWt5AShurSYY0uPEhBbhQPl7fkEZlJ/wCoNHBuqjQdRj75zbgB9lmbWwzRlcAcrhBm3Qx70Wq+s4aa8bEpSrUcbG/KPXcrEs6eKrnK4j3db+wMUXNykns2Ft0Wk7uCaq0GON6bJ/aD9F2hhQ2Ya1s6wAB4Bbt3HLHCy7aFN7RpE+96M5xAnPbgkck2E9UelTjXz+6w6uOe9xhonzKaFOtluAeUH6Lv9SGiIHTil6lZz+Q4CR4oE8RVcXQ63Td4KrSOaOygAZNzwCpVqxw6D6lGQy0KhqMNg4D0QngvtFuAsPDf3rjaLR/lUH+Gz+3xUQMvuFEA6SYBJMCFFFpIsKQOpJRmNaNB9fVRRRVi88lzJxKiigjoCgrjQBRRATJaTA6KMoNOgPWVFFBH0QNTfkPqggkaeO9dURRRnFzpzg+S5/WRuk+C6orCgjHu6dPuVY4hxEkwOJv5KKIQWi4usDM8gCnKeyN7ndwv5lRRSkCr0A0w3X3vKVc8zG9RRRqjU8Q8alDdiXE8fRRREWY8k3gnfuVjjABYT0sPuVFFRX+rm5EfTwQvjCft/KiisZ2comRIAj3uVazHazbkuqLP1v4Tq4jgFWlndoYG9dUWmFcQXAcuX1SwaCbkzwHuFFFYlGziY8o9SuFvFRRED71FFEH/2Q==' }}
          alt='Nome do Exercício'
          mb={3}
          resizeMode='cover'
          rounded='lg'
        />
        <Box bg="gray.600" rounded='md' pb={4} px={4}>
          <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
            <HStack>
              <SeriesSvg />
              <Text color='gray.200' ml='2'>3 séries</Text>
            </HStack>
            <HStack>
              <RepetitionsSvg />
              <Text color='gray.200' ml='2'>12 Repetições</Text>
            </HStack>
          </HStack>
          <Button
            title='Marcar como realizado'
          />
        </Box>
      </VStack>
    </VStack>
  )
}