import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    name: "exemple",
    cpf: "1111111111",
    Reciclagem: "Papel",
    status: "success",
  },
  {
    id: "2",
    name: "exemple",
    cpf: "1111111111",
    Reciclagem: "Papel",
    status: "failed",
  },
  {
    id: "3",
    name: "exemple",
    cpf: "1111111111",
    Reciclagem: "Papel",
    status: "processing",
  },
    {
    id: "3",
    name: "exemple",
    cpf: "1111111111",
    Reciclagem: "Papel",
    status: "processing",
  },
    {
    id: "3",
    name: "exemple",
    cpf: "1111111111",
    Reciclagem: "Papel",
    status: "processing",
  },
    {
    id: "3",
    name: "exemple",
    cpf: "1111111111",
    Reciclagem: "Papel",
    status: "processing",
  },
];

<div className="h-full w-full ">
      <div className="rounded-md border-1 bg-accent p-3 ml-80  ">
        <Table>
          <TableHeader className="bg-neutral-700 ">
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Reciclagem</TableHead>
            <TableHead>Status</TableHead>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.Reciclagem}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>