import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

const data = [
  { id: "1", name: "exemple", cpf: "1111111111", Reciclagem: "Papel", data:"11-11-25", status: "success" },
  { id: "2", name: "exemple", cpf: "1111111111", Reciclagem: "Papel",data:"11-11-25",  status: "failed" },
  { id: "3", name: "exemple", cpf: "1111111111", Reciclagem: "Papel", data:"11-11-25",  status: "processing" },
    { id: "3", name: "exemple", cpf: "1111111111", Reciclagem: "Papel",data:"11-11-25",  status: "processing" },
      { id: "3", name: "exemple", cpf: "1111111111", Reciclagem: "Papel",data:"11-11-25",  status: "processing" },
        { id: "3", name: "exemple", cpf: "1111111111", Reciclagem: "Papel",data:"11-11-25",  status: "processing" },
          { id: "3", name: "exemple", cpf: "1111111111", Reciclagem: "Papel",data:"11-11-25",  status: "processing" },

            { id: "3", name: "exemple", cpf: "1111111111", Reciclagem: "Papel",data:"11-11-25",  status: "processing" },


];

export default function TableAdmin() {
  return (
    <div className="w-full h-full">
     {/*  <div className="grid max-w-sm gap-6">
        <InputGroup>
        <InputGroupInput placeholder="Search..."/>
        <InputGroupAddon>
        <Search/>
        </InputGroupAddon>
        <InputGroupAddon align={"inline-end"}>results</InputGroupAddon>
        </InputGroup>
      </div>*/ }
      <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-4 shadow-lg">
        <div className="overflow-x-auto rounded-lg">
          <Table>
            <TableHeader className="bg-neutral-800 text-neutral-200">
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Reciclagem</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={item.id}
                  className={cn(
                    "transition-colors hover:bg-neutral-800/40",
                    index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800/20"
                  )}
                >
                    
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.cpf}</TableCell>
                  <TableCell>{item.Reciclagem}</TableCell>
                       <TableCell>{item.data}</TableCell>
                    

                  {/* STATUS BADGE */}
                  <TableCell>
                    <Badge
                      className={cn(
                        "text-xs px-2 py-1",
                        item.status === "success" && "bg-green-600 hover:bg-green-700",
                        item.status === "failed" && "bg-red-600 hover:bg-red-700",
                        item.status === "processing" && "bg-yellow-500 text-black hover:bg-yellow-600"
                      )}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>

                  {/* SELECT NA COLUNA DE AÇÕES */}
                  <TableCell className="text-center">
                    <Select>
                      <SelectTrigger className="w-[160px] mx-auto">
                        <SelectValue placeholder="Alterar status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pending">Pendente</SelectItem>
                          <SelectItem value="success">Concluído</SelectItem>
                          <SelectItem value="processing">Em andamento</SelectItem>
                          <SelectItem value="failed">Falhou</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
